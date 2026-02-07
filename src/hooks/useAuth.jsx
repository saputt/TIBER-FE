import { useMutation, useQuery } from "@tanstack/react-query";
import { loginService, registerService } from "../services/authService";

export const useLogin = () => {
  return useMutation({
    mutationFn: (payload) => loginService(payload),
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
    },
  });
};

export const useRegister = () => {
  return useMutation({
    mutationFn: (payload) => registerService(payload),
  });
};

export const useLogout = () => {
  return useMutation({
    mutationFn: () => loginService(),
    onSettled: () => {
      localStorage.removeItem("token");
      window.location.href = "/login";
    },
  });
};
