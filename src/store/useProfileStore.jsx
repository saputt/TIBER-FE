import { create } from "zustand";

export const useProfileStore = create((set) => ({
  isProfileOpen: false,

  setManageProfile: () => {
    set((state) => ({
      isProfileOpen: !state.isManageProfileOpen,
    }));
  },
}));
