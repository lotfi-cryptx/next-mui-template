import { useState } from "react";
import { darkTheme, lightTheme } from "@/config/theme";


export default function useDarkTheme() {

  const [activeTheme, setActiveTheme] = useState(darkTheme);
  const [selectedTheme, setSelectedTheme] = useState<'light' | 'dark'>('dark');

  const setTheme = (theme: 'light' | 'dark') => {
    setSelectedTheme(theme);
    (theme === 'dark') ? setActiveTheme(darkTheme) : setActiveTheme(lightTheme);
  }

  return {
    activeTheme,
    selectedTheme,
    setTheme,
  };

}