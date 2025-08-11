import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/sonner";

const Entrar = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = "Entrar — Lavigo Black Card";
  }, []);

  const handleEmailPass = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) toast.error(error.message);
    else toast.success("Login realizado");
    setLoading(false);
  };

  const handleMagic = async () => {
    setLoading(true);
    const redirectUrl = `${window.location.origin}/vip`;
    const { error } = await supabase.auth.signInWithOtp({ email, options: { emailRedirectTo: redirectUrl } });
    if (error) toast.error(error.message);
    else toast.success("Link mágico enviado ao seu e-mail");
    setLoading(false);
  };

  return (
    <main className="min-h-screen vip flex items-center justify-center p-6 bg-gradient-hero">
      <section className="w-full max-w-md rounded-2xl border bg-card p-6 shadow-elegant">
        <h1 className="text-2xl font-semibold mb-1 font-display">Lavigo Black Card</h1>
        <p className="text-sm text-muted-foreground mb-6">Acesso ao Portal de Membros VIP</p>
        <form onSubmit={handleEmailPass} className="space-y-4">
          <div>
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" type="email" placeholder="voce@email.com" value={email} onChange={(e)=>setEmail(e.target.value)} required />
          </div>
          <div>
            <Label htmlFor="password">Senha</Label>
            <Input id="password" type="password" placeholder="••••••••" value={password} onChange={(e)=>setPassword(e.target.value)} />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>{loading? 'Entrando...' : 'Entrar'}</Button>
        </form>
        <div className="mt-4 grid gap-2">
          <Button variant="secondary" onClick={handleMagic} disabled={loading}>Receber link mágico</Button>
        </div>
        <p className="mt-6 text-xs text-muted-foreground">Ao continuar, você concorda com nossos <a className="underline" href="/termos">Termos</a> e <a className="underline" href="/privacidade">Política de Privacidade</a>.</p>
      </section>
    </main>
  );
};

export default Entrar;
