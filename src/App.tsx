import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Fotografia from "./pages/Fotografia";
import Videos from "./pages/Videos";
import Design from "./pages/Design";
import Marketing from "./pages/Marketing";
import { AuthProvider } from "@/context/AuthContext";
import { ProtectedRoute as Protected } from "@/routes/ProtectedRoute";
import Entrar from "./pages/Entrar";
import Forbidden from "./pages/Forbidden";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Dashboard from "./pages/vip/Dashboard";
import Beneficios from "./pages/vip/Beneficios";
import BeneficioDetalhe from "./pages/vip/BeneficioDetalhe";
import Resgates from "./pages/vip/Resgates";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
        {/* Auth/Role context for protected routes */}
        {/* Wrapped inside router to access location APIs */}
        {/* VIP routes do not replace public site */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/fotografia" element={<Fotografia />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/design" element={<Design />} />
          <Route path="/marketing" element={<Marketing />} />

          {/* Members */}
          <Route path="/entrar" element={<Entrar />} />
          <Route path="/403" element={<Forbidden />} />
          <Route path="/termos" element={<Terms />} />
          <Route path="/privacidade" element={<Privacy />} />

          <Route path="/vip" element={<Protected><Dashboard /></Protected>} />
          <Route path="/vip/beneficios" element={<Protected><Beneficios /></Protected>} />
          <Route path="/vip/beneficios/:slug" element={<Protected><BeneficioDetalhe /></Protected>} />
          <Route path="/vip/resgates" element={<Protected><Resgates /></Protected>} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
