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

export const getDailyNotes = () => {
  return fetcher(`/activity/show-checkup-note`, {
    method: "GET",
  });
};

export const editDailyNotes = () => {
  return fetcher(`/activity/edit-checkup-note`, {
    method: "PUT",
  });
};

export const addDailyNotes = (payload) => {
  return fetcher(`/activity/add-checkup-note`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
};
