import { create } from "zustand";

export const useProfileStore = create((set) => ({
  isProfileOpen: false,
  isDailyOpen: false,
  isControlOpen: false,

  setProfile: () => {
    set((state) => ({
      isProfileOpen: !state.isProfileOpen,
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
