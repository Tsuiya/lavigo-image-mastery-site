import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user } = useAuth();
  return (
    <main className="vip min-h-screen p-6">
      <header className="mb-6">
        <h1 className="font-display text-2xl">Bem-vindo, {user?.email}</h1>
        <p className="text-muted-foreground text-sm">Ser selecionado é só o começo.</p>
      </header>
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader><CardTitle>Benefícios ativos</CardTitle></CardHeader>
          <CardContent>
            <Button asChild variant="secondary"><Link to="/vip/beneficios">Ver todos</Link></Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Conteúdos novos</CardTitle></CardHeader>
          <CardContent>
            <Button asChild variant="secondary"><Link to="/vip/conteudos">Ver conteúdos</Link></Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Agendamento prioritário</CardTitle></CardHeader>
          <CardContent>
            <Button asChild><Link to="/vip/agendar">Agendar</Link></Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Eventos & Convites</CardTitle></CardHeader>
          <CardContent>
            <Button asChild variant="secondary"><Link to="/vip/eventos">Ver eventos</Link></Button>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};
export default Dashboard;
