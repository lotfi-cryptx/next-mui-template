import { create } from "zustand";

export type ThemeModeType = "light" | "dark";

interface ThemeModeStoreType {
  themeMode: ThemeModeType
  setThemeMode: (mode: ThemeModeType) => void
}

const getLocalThemeMode: () => (ThemeModeType) = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem("themeMode") === "light" ? "light" : "dark";
  }
  return "dark";
};

const setLocalThemeMode: (mode: ThemeModeType) => void = (mode) => {
  if (typeof window !== 'undefined') {
    return localStorage.setItem("themeMode", mode);
  }
}

export const themeModeStore = create<ThemeModeStoreType>((set) => ({
  themeMode: getLocalThemeMode(),
  setThemeMode: (mode: ThemeModeType) => { set(() => ({themeMode: mode})); setLocalThemeMode(mode);}
}));
