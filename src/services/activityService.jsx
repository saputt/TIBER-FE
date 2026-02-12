import { fetcher } from "./api";

export const activityOverviewService = () => {
  return fetcher("/activity/overview", {
    method: "GET",
  });
};

export const activityMonth = (numberMonth) => {
  return fetcher(`/activity/calendar/${numberMonth}`, {
    method: "GET",
  });
};
