import { create } from "zustand";

export const useProfileStore = create((set) => ({
  isProfileOpen: false,

  setProfileTrue: () => {
    set({
      isProfileOpen: true,
    });
  },
  setProfileFalse: () => {
    set({
      isProfileOpen: false,
    });
  },
}));
