import { fetcher } from "./api";

export const activityOverviewService = () => {
  return fetcher("/activity/overview", {
    method: "GET",
  });
};

export const activityWeekly = (weekStart) => {
  return fetcher(`/activity/logs-weekly/${weekStart}`, {
    method: "GET",
  });
};

export const activityMonthly = (month) => {
  return fetcher(`/activity/calendar/${month}`, {
    method: "GET",
  });
};
