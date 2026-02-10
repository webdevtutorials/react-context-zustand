// src / features / myFeature / store / useMyStore.js

import { create } from 'zustand';

export const useMyStore = create((set) => ({
    dynamicData: "No data",

    setDynamicData: (newData) => set({ dynamicData: newData }),

    resetData: () => set({ dynamicDAta: "No data" }),
}));