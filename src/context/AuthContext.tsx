import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";

export type AppRole = "MEMBER" | "BLACK" | "ADMIN";

interface AuthState {
  user: User | null;
  session: Session | null;
  role: AppRole | null;
  loading: boolean;
}

const AuthContext = createContext<AuthState>({ user: null, session: null, role: null, loading: true });

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [role, setRole] = useState<AppRole | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
      setUser(newSession?.user ?? null);
      if (!newSession?.user) { setRole(null); setLoading(false); return; }
      // Defer role fetch to avoid deadlocks
      setTimeout(async () => {
        const { data } = await supabase
          .from("users_extra")
          .select("role")
          .eq("user_id", newSession.user.id)
          .maybeSingle();
        setRole((data?.role as AppRole) ?? "MEMBER");
        setLoading(false);
      }, 0);
    });

    supabase.auth.getSession().then(async ({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) {
        const { data } = await supabase
          .from("users_extra")
          .select("role")
          .eq("user_id", session.user.id)
          .maybeSingle();
        setRole((data?.role as AppRole) ?? "MEMBER");
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const value = useMemo(() => ({ user, session, role, loading }), [user, session, role, loading]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
