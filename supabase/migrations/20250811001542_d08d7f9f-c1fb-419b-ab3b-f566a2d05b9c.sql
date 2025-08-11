create or replace function public.generate_redemption_code()
returns trigger
language plpgsql
stable
security definer set search_path = public
as $$
begin
  if new.code is null then
    new.code := 'LAV-' || substr(replace(gen_random_uuid()::text, '-', ''), 1, 4);
  end if;
  return new;
end; $$;