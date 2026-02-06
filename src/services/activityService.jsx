import { fetcher } from "./api";

export const activityOverviewService = () => {
  return fetcher("/activity/overview", {
    method: "GET",
  });
};
