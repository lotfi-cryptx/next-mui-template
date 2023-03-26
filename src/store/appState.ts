import { create } from "zustand";

export enum appStateEnum {
  Initial,
  BannerShown,
  BannerClosed,
  DashboardLoaded,
}

interface appStateStoreType {
  appState: appStateEnum
  setAppState: (newState: appStateEnum) => void
}

export const appStateStore = create<appStateStoreType>((set) => ({
  appState: appStateEnum.Initial,
  setAppState: (newState: appStateEnum) => set(() => ({appState: newState}))
}));
