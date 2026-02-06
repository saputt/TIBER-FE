import { fetcher } from "./api";

export const personalizationService = (payload) => {
  return fetcher("/personalization", {
    method: "PUT",
    body: payload,
  });
};
