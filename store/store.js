import { create } from "zustand";

export const useStore = create((set) => ({
  activeTab: "text",
  isLensAuthenticated: false,
  accessToken: "",
  refreshToken: "",
  userEthAddress: "",
  hasHandle: false,
  setActiveTab: (newActiveTab) => set({ activeTab: newActiveTab }),
  setIsLensAuthenticated: (authenticated) =>
    set((state) => ({ ...state, isLensAuthenticated: authenticated })),
  setAccessToken: (token) => set((state) => ({ ...state, accessToken: token })),
  setRefreshToken: (token) =>
    set((state) => ({ ...state, refreshToken: token })),
  setUserEthAddress: (address) =>
    set((state) => ({ ...state, userEthAddress: address })),
  setHasHandle: (hasHandle) =>
    set((state) => ({ ...state, hasHandle: hasHandle })),
}));

export const useProfile = create((set) => ({
  currentProfile: undefined,
  setCurrentProfile: (newProfile) => set({ currentProfile: newProfile }),
}));
