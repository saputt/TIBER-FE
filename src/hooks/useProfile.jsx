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
import { useProfileStore } from "../store/useProfileStore";

export const useUpdatePersonalization = () => {
  const queryClient = useQueryClient();
  const setPersonalization = useProfileStore(
    (state) => state.setPersonalization,
  );
  return useMutation({
    mutationFn: (payload) => updatePersonalizationService(payload),
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries({
        queryKey: ["dashboard", "personalization"],
      });
      setPersonalization({
        reminder_time: data.reminder_time,
        time_category: data.time_category,
      });
    },
  });
};

export const useGetPersonalization = () => {
  return useQuery({
    queryKey: ["personalization", "dashboard"],
    queryFn: () => getPersonalizationService(),
    refetchOnWindowFocus: false,
  });
};

export const useProfile = () => {
  return useMutation({
    mutationFn: (payload) => profileService(payload),
  });
};
