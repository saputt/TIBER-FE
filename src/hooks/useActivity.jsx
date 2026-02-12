import { useQuery } from "@tanstack/react-query";
import {
  activityMonth,
  activityOverviewService,
} from "../services/activityService";

export const useActivityOverview = () => {
  return useQuery({
    queryKey: ["activity"],
    queryFn: () => activityOverviewService(),
  });
};

export const useActivityMonth = (numberMonth) => {
  return useQuery({
    queryKey: ["activity"],
    queryFn: () => activityMonth(numberMonth),
    enabled: !!numberMonth,
  });
};
