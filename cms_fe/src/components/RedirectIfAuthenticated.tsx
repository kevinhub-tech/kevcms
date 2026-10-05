import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import type{ ReactNode } from "react";

export function RedirectIfAuthenticated({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth();

  if (loading) return null; // or a spinner
  if (user) return <Navigate to="/pages" replace />;

  return <>{children}</>;
}