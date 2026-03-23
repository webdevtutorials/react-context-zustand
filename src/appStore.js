import { create } from "zustand";

export const useAppStore = create((set) => ({
  data1: "No data",
  data2: "No data",
  data3: "No data",

  setData: (key, value) => set((state) => ({ ...state, [key]: value })),
}));
