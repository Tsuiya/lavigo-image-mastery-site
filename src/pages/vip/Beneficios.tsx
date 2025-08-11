import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const fetchBenefits = async () => {
  const { data, error } = await supabase.from("benefits").select("id, title, slug, description_short, is_black_only, expires_at, category").order("created_at", { ascending: false });
  if (error) throw error;
  return data;
};

const Beneficios = () => {
  const { data } = useQuery({ queryKey: ["benefits"], queryFn: fetchBenefits });
  return (
    <main className="vip min-h-screen p-6">
      <h1 className="font-display text-2xl mb-4">Benefícios</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data?.map((b) => (
          <Link to={`/vip/beneficios/${b.slug}`} key={b.id} className="block">
            <Card className="transition hover:shadow-glow hover:scale-[1.01]">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-base">{b.title}</CardTitle>
                {b.is_black_only && <Badge className="bg-accent text-accent-foreground">BLACK</Badge>}
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{b.description_short}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
};
export default Beneficios;
