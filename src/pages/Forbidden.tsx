const Forbidden = () => (
  <main className="min-h-screen vip flex items-center justify-center p-6">
    <div className="max-w-md text-center rounded-2xl border bg-card p-8 shadow-elegant">
      <h1 className="font-display text-3xl mb-2">Acesso negado</h1>
      <p className="text-muted-foreground mb-6">Você não tem permissão para acessar esta área.</p>
      <a href="/suporte" className="underline">Falar com atendimento</a>
    </div>
  </main>
);
export default Forbidden;
