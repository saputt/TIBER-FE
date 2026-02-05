import { create } from "zustand";

export const useProfileStore = create((set) => ({
  isDurationOpen: false,
  isDailyOpen: false,
  isControlOpen: false,
  isStartDateOpen: false,

  setDuration: () => {
    set((state) => ({
      isDurationOpen: !state.isDurationOpen,
    }));
  },

  setStartDate: () => {
    set((state) => ({
      isStartDateOpen: !state.isStartDateOpen,
    }));
  },

  setDaily: () => {
    set((state) => ({
      isDailyOpen: !state.isDailyOpen,
    }));
  },

  setControl: () => {
    set((state) => ({
      isControlOpen: !state.isControlOpen,
    }));
  },
}));
