import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export const AuthGuard = () => {
  const isLogin = useAuthStore((state) => state.isLogin);
  return isLogin ? <Outlet /> : <Navigate to="/login" replace />;
};

export const GuestGuard = () => {
  const isLogin = useAuthStore((state) => state.isLogin);
  return !isLogin ? <Outlet /> : <Navigate to="/dashboard" replace />;
};
