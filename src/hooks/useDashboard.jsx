import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { dashboardService, logService } from "../services/dashboardService";

export const useDashboardOverview = () => {
  return useQuery({
    queryKey: ["dashboard"],
    queryFn: () => dashboardService(),
    staleTime: 60 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};

export const useMedicationLog = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload) => logService(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["dashboard"],
      });
      queryClient.invalidateQueries({
        queryKey: ["activity"],
      });
    },
  });
};
