import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import React from "react";
import {
  getPersonalizationService,
  updatePersonalizationService,
} from "../services/personalizationService";
import { profileService } from "../services/profileService";
import { usePersonalizationStore } from "../store/usePersonalizationStore";

export const useUpdatePersonalization = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload) => updatePersonalizationService(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["dashboard", "personalization"],
      });
    },
  });
};

export const useGetPersonalization = () => {
  return useQuery({
    queryKey: ["personalization", "dashboard"],
    queryFn: () => getPersonalizationService(),
    onSuccess: (data) => {},
  });
};

export const useProfile = () => {
  return useMutation({
    mutationFn: (payload) => profileService(payload),
  });
};
