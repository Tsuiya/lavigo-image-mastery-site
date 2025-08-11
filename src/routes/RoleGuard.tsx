import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

export const RoleGuard = ({ allow, children }: { allow: ("MEMBER"|"BLACK"|"ADMIN")[]; children: JSX.Element }) => {
  const { role, loading } = useAuth();
  if (loading) return null;
  if (!role || !allow.includes(role)) return <Navigate to="/403" replace />;
  return children;
};
