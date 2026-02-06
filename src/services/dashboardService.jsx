import { fetcher } from "./api";

export const dashboardService = () => {
  return fetcher("/dashboard", {
    method: "GET",
  });
};

export const logService = (payload) => {
  return fetcher("/logs", {
    method: "POST",
    body: payload,
  });
};
