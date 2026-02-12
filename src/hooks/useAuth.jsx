import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  loginService,
  logoutService,
  registerService,
} from "../services/authService";
import { useAuthStore } from "../store/useAuthStore";
import { dashboardService } from "../services/dashboardService";

export const useLogin = () => {
  const setAuth = useAuthStore((state) => state.setAuth);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload) => loginService(payload),
    onSuccess: async (data) => {
      await queryClient.prefetchQuery({
        queryKey: ["dashboard"],
        queryFn: () => dashboardService(),
      });
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
