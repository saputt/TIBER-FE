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
  });
};

export const useActivityMonth = (numberMonth) => {
  return useQuery({
    queryKey: ["activity", "month", numberMonth],
    queryFn: () => activityMonthly(numberMonth),
    enabled: !!numberMonth,
  });
};

export const useActivityWeek = (weekStart) => {
  return useQuery({
    queryKey: ["activity", "week", weekStart],
    queryFn: () => activityWeekly(weekStart),
    enabled: !!weekStart,
  });
};
