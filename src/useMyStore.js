// src / useMyStore.js

import { create } from "zustand";

export const useMyStore = create((set) => ({
  data1: "No data",
  data2: "No data",
  data3: "No data",

  setData: (key, value) => set({ [key]: value }),
}));
