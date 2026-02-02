import { create } from "zustand";

export const useOnboardingStore = create((set) => ({
  step: 1,
  totalStep: 5,
  formData: {},

  nextStep: () =>
    set((state) => {
      if (state.step < state.totalStep) {
        return { step: state.step + 1 };
      }
      return { step: state.totalStep };
    }),

  backStep: () =>
    set((state) => {
      if (state.step !== 1) {
        return { step: state.step - 1 };
      }
      return { step: 1 };
    }),

  setFormData: (category, newForm) =>
    set((state) => ({
      formData: {
        ...state.formData,
        [category]: {
          ...state.formData[category],
          ...newForm,
        },
      },
    })),
}));
