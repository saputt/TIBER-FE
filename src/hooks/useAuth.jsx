import { useMutation, useQuery } from "@tanstack/react-query";
import {
  loginService,
  logoutService,
  registerService,
} from "../services/authService";
import { useAuthStore } from "../store/useAuthStore";

export const useLogin = () => {
  const setAuth = useAuthStore((state) => state.setAuth);

  return useMutation({
    mutationFn: (payload) => loginService(payload),
    onSuccess: (data) => {
      console.log(data);
      setAuth(data.data, data.token);
      window.location.href = "/dashboard";
    },
  });
};

export const useRegister = () => {
  return useMutation({
    mutationFn: (payload) => registerService(payload),
    onSuccess: (data) => {
      console.log(data);
      window.location.href = "/login";
    },
  });
};

export const useLogout = () => {
  const logout = useAuthStore((state) => state.logout);
  return useMutation({
    mutationFn: () => logoutService(),
    onSettled: () => {
      localStorage.removeItem("auth-store");
      logout();
      window.location.href = "/";
    },
  });
};
