import { create, useStore } from "zustand";

export const useTabStore = create((set) => ({
  activeTab: "text",
  setActiveTab: (newActiveTab) => set({ activeTab: newActiveTab }),
}));