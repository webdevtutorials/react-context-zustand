import { create } from "zustand";

export const useLabelStore = create((set) => ({
  label1: "Label Me",
  label2: "Label Me",
  label3: "Label Me",

  updateLabel: (key, value) => set(() => ({ [key]: value })),
}));
