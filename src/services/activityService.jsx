import { fetcher } from "./api";

export const activityOverviewService = () => {
  return fetcher("/activity/overview", {
    method: "GET",
  });
};

export const activityMonth = (weekStart) => {
  return fetcher(`/activity/logs-weekly/${weekStart}`, {
    method: "GET",
  });
};
