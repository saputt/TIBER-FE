import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import React from "react";
import { personalizationService } from "../services/personalizationService";
import { profileService } from "../services/profileService";

export const usePersonalization = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload) => personalizationService(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["dashboard"] });
    },
  });
};

export const useProfile = () => {
  return useMutation({
    mutationFn: (payload) => profileService(payload),
  });
};
