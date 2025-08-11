import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const fetchRedemptions = async () => {
  const { data, error } = await supabase.from("redemptions").select("id, status, code, created_at, benefit_id").order("created_at", { ascending: false });
  if (error) throw error;
  return data;
};

const Resgates = () => {
  const { data } = useQuery({ queryKey: ["redemptions"], queryFn: fetchRedemptions });
  return (
    <main className="vip min-h-screen p-6">
      <h1 className="font-display text-2xl mb-4">Resgates</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Código</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Data</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((r) => (
            <TableRow key={r.id}>
              <TableCell>{r.code}</TableCell>
              <TableCell className="capitalize">{r.status}</TableCell>
              <TableCell>{new Date(r.created_at as any).toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
};
export default Resgates;
