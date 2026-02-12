import { useQuery } from "@tanstack/react-query";
import {
  activityWeekly,
  activityMonthly,
  activityOverviewService,
} from "../services/activityService";

export const useActivityOverview = () => {
  return useQuery({
    queryKey: ["activity", "overview"],
    queryFn: () => activityOverviewService(),
    staleTime: 60 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};

export const useActivityMonth = (numberMonth) => {
  return useQuery({
    queryKey: ["month", numberMonth],
    queryFn: () => activityMonthly(numberMonth),
    enabled: !!numberMonth,
    staleTime: 60 * 60 * 1000,
  });
};

export const useActivityWeek = (weekStart) => {
  return useQuery({
    queryKey: ["week", weekStart],
    queryFn: () => activityWeekly(weekStart),
    enabled: !!weekStart,
    staleTime: 60 * 60 * 1000,
  });
};
