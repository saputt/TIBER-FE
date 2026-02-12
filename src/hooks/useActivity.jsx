import { useQuery } from "@tanstack/react-query";
import {
  activityMonth,
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
    queryFn: () => activityMonth(numberMonth),
    enabled: !!numberMonth,
  });
};
