import type { JSX } from "react";
import { Navigate } from "react-router-dom";

export function RequireAuth({ children }: { children: JSX.Element }) {
  const token = localStorage.getItem("jwt"); // o context/state
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
