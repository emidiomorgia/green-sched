import type { JSX } from "react";
import { Navigate } from "react-router-dom";

export function RequireNoAuth({ children }: { children: JSX.Element }) {
  const token = localStorage.getItem("jwt");
  if (token) {
    return <Navigate to="/dashboard" replace />;
  }
  return children;
}
