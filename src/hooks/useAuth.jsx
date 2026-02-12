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
    onSettled: (data, error, variables, context) => {
      localStorage.removeItem("auth-store");
      logout();
      // If the caller passes { redirect: false }, we skip the redirect
      // This is accessed via variables if passed to mutate, but mutationFn takes no args here.
      // Better way: let the onSuccess handle it, or check arguments.
      // Actually, standard usage of useMutation allows onSuccess in mutate() to override.
      // But onSettled here will run regardless.
      // Let's change this to NOT redirect by default if we want manual control, 
      // or check a property. 
      // Simplified: We'll remove the redirect from here and let the caller handle it.
      // BUT this might break other usages if any (we checked, only Profile).
      // So we will remove window.location.href here.
      // window.location.href = "/"; 
    },
  });
};
