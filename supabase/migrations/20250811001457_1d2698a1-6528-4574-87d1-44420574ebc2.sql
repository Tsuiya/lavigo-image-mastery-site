-- Ensure extensions
create extension if not exists pgcrypto;

-- Create enums (no IF NOT EXISTS for compatibility)
create type public.app_role as enum ('MEMBER','BLACK','ADMIN');
create type public.benefit_category as enum ('Sessão Extra','Diagnóstico','Desconto Parceiro','Evento VIP');
create type public.content_type as enum ('Guia','Modelo','Tutorial','Checklist');
create type public.campaign_objective as enum ('Tráfego WhatsApp','Leads','Promo Sazonal');
create type public.redemption_status as enum ('solicitado','aprovado','concluído','expirado');
create type public.rsvp_status as enum ('confirmado','lista_espera','cancelado');

-- Tables first
create table public.companies (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  cnpj text,
  site text,
  instagram text,
  owner_user_id uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now()
);

create table public.users_extra (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users(id) on delete cascade,
  role public.app_role not null default 'MEMBER',
  company_id uuid references public.companies(id) on delete set null,
  black_card_number text,
  black_card_expiry date,
  member_since date default now(),
  created_at timestamptz not null default now()
);

create table public.benefits (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  description_short text,
  description_long text,
  category public.benefit_category not null,
  is_black_only boolean not null default false,
  expires_at date,
  rules text,
  how_to_redeem text,
  stock int,
  created_at timestamptz not null default now()
);

create table public.redemptions (
  id uuid primary key default gen_random_uuid(),
  benefit_id uuid not null references public.benefits(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  status public.redemption_status not null default 'solicitado',
  code text,
  created_at timestamptz not null default now(),
  notes text
);

create table public.contents (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  type public.content_type not null,
  duration text,
  tags text[],
  body text,
  download_url text,
  is_black_only boolean not null default false,
  created_at timestamptz not null default now()
);

create table public.assets (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  type text check (type in ('LUT','Overlay','Trilha','Moldura')),
  preview_url text,
  file_url text,
  license_note text,
  created_at timestamptz not null default now()
);

create table public.campaigns (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  objective public.campaign_objective not null,
  copy_headline text,
  copy_primary text,
  creative_url text,
  targeting text,
  budget_suggestion text,
  is_black_only boolean not null default false,
  created_at timestamptz not null default now()
);

create table public.events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  starts_at timestamptz not null,
  ends_at timestamptz not null,
  location text,
  is_online boolean not null default false,
  description text,
  capacity int,
  speakers text,
  created_at timestamptz not null default now()
);

create table public.rsvps (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null references public.events(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  status public.rsvp_status not null default 'confirmado',
  created_at timestamptz not null default now(),
  ticket_qr text
);

create table public.news (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  date date not null,
  body text,
  highlight boolean not null default false,
  created_at timestamptz not null default now()
);

create table public.partners (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  perk_description text,
  link text,
  coupon text,
  created_at timestamptz not null default now()
);

create table public.contracts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  company_id uuid references public.companies(id) on delete set null,
  title text not null,
  pdf_url text,
  signed_at date,
  created_at timestamptz not null default now()
);

-- Enable RLS
alter table public.companies enable row level security;
alter table public.users_extra enable row level security;
alter table public.benefits enable row level security;
alter table public.redemptions enable row level security;
alter table public.contents enable row level security;
alter table public.assets enable row level security;
alter table public.campaigns enable row level security;
alter table public.events enable row level security;
alter table public.rsvps enable row level security;
alter table public.news enable row level security;
alter table public.partners enable row level security;
alter table public.contracts enable row level security;

-- Helper functions after tables exist
create or replace function public.has_role(_user_id uuid, _role public.app_role)
returns boolean
language sql
stable
security definer set search_path = public
as $$
  select exists (
    select 1 from public.users_extra where user_id = _user_id and role = _role
  );
$$;

create or replace function public.is_admin(_user_id uuid)
returns boolean language sql stable security definer set search_path = public as $$
  select public.has_role(_user_id, 'ADMIN'::public.app_role);
$$;

create or replace function public.is_black(_user_id uuid)
returns boolean language sql stable security definer set search_path = public as $$
  select public.has_role(_user_id, 'BLACK'::public.app_role) or public.has_role(_user_id, 'ADMIN'::public.app_role);
$$;

-- Trigger to auto generate code for redemptions
create or replace function public.generate_redemption_code()
returns trigger language plpgsql as $$
begin
  if new.code is null then
    new.code := 'LAV-' || substr(replace(gen_random_uuid()::text, '-', ''), 1, 4);
  end if;
  return new;
end; $$;

drop trigger if exists trg_redemptions_code on public.redemptions;
create trigger trg_redemptions_code
before insert on public.redemptions
for each row execute function public.generate_redemption_code();

-- Policies
create policy "companies_owner_select" on public.companies
for select to authenticated using (owner_user_id = auth.uid() or public.is_admin(auth.uid()));
create policy "companies_owner_modify" on public.companies
for all to authenticated using (owner_user_id = auth.uid() or public.is_admin(auth.uid())) with check (owner_user_id = auth.uid() or public.is_admin(auth.uid()));

create policy "users_extra_self_select" on public.users_extra
for select to authenticated using (user_id = auth.uid() or public.is_admin(auth.uid()));
create policy "users_extra_self_modify" on public.users_extra
for all to authenticated using (user_id = auth.uid() or public.is_admin(auth.uid())) with check (user_id = auth.uid() or public.is_admin(auth.uid()));

create policy "benefits_select_non_black" on public.benefits
for select to authenticated using (not is_black_only);
create policy "benefits_select_black_only" on public.benefits
for select to authenticated using (is_black_only and public.is_black(auth.uid()));
create policy "benefits_admin_modify" on public.benefits
for all to authenticated using (public.is_admin(auth.uid())) with check (public.is_admin(auth.uid()));

create policy "contents_select_non_black" on public.contents
for select to authenticated using (not is_black_only);
create policy "contents_select_black_only" on public.contents
for select to authenticated using (is_black_only and public.is_black(auth.uid()));
create policy "contents_admin_modify" on public.contents
for all to authenticated using (public.is_admin(auth.uid())) with check (public.is_admin(auth.uid()));

create policy "campaigns_select_non_black" on public.campaigns
for select to authenticated using (not is_black_only);
create policy "campaigns_select_black_only" on public.campaigns
for select to authenticated using (is_black_only and public.is_black(auth.uid()));
create policy "campaigns_admin_modify" on public.campaigns
for all to authenticated using (public.is_admin(auth.uid())) with check (public.is_admin(auth.uid()));

create policy "assets_select_all" on public.assets
for select to authenticated using (true);
create policy "assets_admin_modify" on public.assets
for all to authenticated using (public.is_admin(auth.uid())) with check (public.is_admin(auth.uid()));

create policy "events_select_all" on public.events
for select to authenticated using (true);
create policy "events_admin_modify" on public.events
for all to authenticated using (public.is_admin(auth.uid())) with check (public.is_admin(auth.uid()));

create policy "rsvps_self_select" on public.rsvps
for select to authenticated using (user_id = auth.uid() or public.is_admin(auth.uid()));
create policy "rsvps_self_insert" on public.rsvps
for insert to authenticated with check (user_id = auth.uid() or public.is_admin(auth.uid()));
create policy "rsvps_self_update" on public.rsvps
for update to authenticated using (user_id = auth.uid() or public.is_admin(auth.uid()));

create policy "redemptions_self_select" on public.redemptions
for select to authenticated using (user_id = auth.uid() or public.is_admin(auth.uid()));
create policy "redemptions_self_insert" on public.redemptions
for insert to authenticated with check (user_id = auth.uid() or public.is_admin(auth.uid()));
create policy "redemptions_self_update" on public.redemptions
for update to authenticated using (user_id = auth.uid() or public.is_admin(auth.uid()));

create policy "news_select_all" on public.news
for select to authenticated using (true);
create policy "news_admin_modify" on public.news
for all to authenticated using (public.is_admin(auth.uid())) with check (public.is_admin(auth.uid()));

create policy "partners_select_all" on public.partners
for select to authenticated using (true);
create policy "partners_admin_modify" on public.partners
for all to authenticated using (public.is_admin(auth.uid())) with check (public.is_admin(auth.uid()));

create policy "contracts_self_select" on public.contracts
for select to authenticated using (user_id = auth.uid() or public.is_admin(auth.uid()));
create policy "contracts_admin_modify" on public.contracts
for all to authenticated using (public.is_admin(auth.uid())) with check (public.is_admin(auth.uid()));

-- Seeds
insert into public.benefits (title, slug, description_short, description_long, category, is_black_only, rules, how_to_redeem, stock)
values
('Sessão Extra VIP', 'sessao-extra-vip', 'Uma sessão extra exclusiva para BLACK', 'Sessão adicional com nossa equipe para revisões e otimizações.', 'Sessão Extra', true, 'Válido por 30 dias após emissão.', 'Solicite via portal e agende o horário.', 10),
('Diagnóstico Semestral', 'diagnostico-semestral', 'Avaliação estratégica semestral', 'Análise 360º de performance e branding com plano de ação.', 'Diagnóstico', false, 'Um por semestre.', 'Solicite o agendamento.', 50),
('Desconto Parceiro Print', 'desconto-parceiro-print', '15% em parceiro de impressão', 'Cupom exclusivo em parceiro de impressão premium.', 'Desconto Parceiro', false, 'Uso único por cliente.', 'Resgate o cupom e utilize no checkout.', 200);

insert into public.contents (title, slug, type, duration, tags, body, download_url, is_black_only)
values
('Guia de Identidade Visual', 'guia-identidade-visual', 'Guia', '12 min', ARRAY['brand','design'], 'Conteúdo em markdown...', null, false),
('E-book de Branding Local', 'ebook-branding-local', 'Guia', '18 min', ARRAY['branding','local'], 'E-book completo...', null, true),
('Tutorial: Setup de LUTs', 'tutorial-setup-luts', 'Tutorial', '7 min', ARRAY['video','color'], 'Passo a passo...', null, false),
('Checklist de Lançamento', 'checklist-lancamento', 'Checklist', '5 min', ARRAY['go-to-market'], 'Checklist...', null, false);

insert into public.assets (title, type, preview_url, file_url, license_note)
values
('LUT Cinematic 01', 'LUT', 'https://placehold.co/400x200', 'https://placehold.co/zip', 'Uso exclusivo em materiais Lavigo'),
('Overlay Light Leaks', 'Overlay', 'https://placehold.co/400x200', 'https://placehold.co/zip', 'Uso exclusivo em materiais Lavigo'),
('Trilha Ambiente Focus', 'Trilha', 'https://placehold.co/400x200', 'https://placehold.co/audio', 'Uso exclusivo em materiais Lavigo'),
('Moldura Art Déco A', 'Moldura', 'https://placehold.co/400x200', 'https://placehold.co/svg', 'Uso exclusivo em materiais Lavigo');

insert into public.campaigns (title, objective, copy_headline, copy_primary, creative_url, targeting, budget_suggestion, is_black_only)
values
('Tráfego WhatsApp - Oferta Rápida', 'Tráfego WhatsApp', 'Chame no WhatsApp', 'Texto primário otimizado...', 'https://placehold.co/creative', 'Geo: Ibitinga + raio 25km', 'R$ 40/dia', false),
('Promo Sazonal - Coleção Outono', 'Promo Sazonal', 'Coleção Outono', 'Texto primário sazonal...', 'https://placehold.co/creative', 'Interesses: moda, lifestyle', 'R$ 60/dia', true);

insert into public.events (title, starts_at, ends_at, location, is_online, description, capacity, speakers)
values
('Encontro VIP Lavigo', now() + interval '7 days', now() + interval '7 days 2 hours', 'Ibitinga - SP', false, 'Networking e insights.', 50, 'Equipe Lavigo'),
('Workshop de Conteúdo', now() + interval '14 days', now() + interval '14 days 3 hours', 'Online', true, 'Mão na massa com nossos especialistas.', 200, 'Equipe Lavigo');

insert into public.news (title, date, body, highlight)
values
('Lançamento do Black Card', current_date, 'Apresentamos o programa VIP.', true),
('Novas parcerias locais', current_date + interval '1 day', 'Mais benefícios chegando.', false);
