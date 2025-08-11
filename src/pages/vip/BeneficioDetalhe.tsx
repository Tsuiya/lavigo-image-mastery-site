import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";

const fetchBenefit = async (slug: string) => {
  const { data, error } = await supabase.from("benefits").select("id, title, description_long, rules, how_to_redeem, is_black_only").eq("slug", slug).maybeSingle();
  if (error) throw error;
  return data;
};

const BeneficioDetalhe = () => {
  const { slug } = useParams();
  const { data } = useQuery({ queryKey: ["benefit", slug], queryFn: () => fetchBenefit(slug!) , enabled: !!slug });

  const handleRedeem = async () => {
    toast.success("Solicitação registrada");
    // TODO: create redemption row and optional stock decrement via edge function
  };

  if (!data) return null;
  return (
    <main className="vip min-h-screen p-6">
      <h1 className="font-display text-2xl mb-2">{data.title}</h1>
      {data.is_black_only && <p className="text-xs text-muted-foreground mb-4">Exclusivo BLACK</p>}
      <div className="space-y-4 max-w-2xl">
        <section>
          <h2 className="font-display text-lg mb-1">Como funciona</h2>
          <p className="text-sm text-muted-foreground whitespace-pre-wrap">{data.how_to_redeem}</p>
        </section>
        <section>
          <h2 className="font-display text-lg mb-1">Regras</h2>
          <p className="text-sm text-muted-foreground whitespace-pre-wrap">{data.rules}</p>
        </section>
        <Button onClick={handleRedeem}>Resgatar agora</Button>
      </div>
    </main>
  );
};
export default BeneficioDetalhe;
