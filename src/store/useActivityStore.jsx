import { create } from "zustand";

export const useActivityStore = create((set) => ({
  isCalenderMonth: false,
  setCalenderMonth: () => {
    set((state) => ({
      isCalenderMonth: !state.isCalenderMonth,
    }));
  },
}));
