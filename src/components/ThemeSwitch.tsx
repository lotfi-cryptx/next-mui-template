import { themeModeStore } from "@/store/themeMode";
import { Brightness3, Brightness7 } from "@mui/icons-material";
import { IconButton } from "@mui/material";


export default function ThemeSwitch() {

  const themeMode = themeModeStore((state) => state.themeMode)
  const setThemeMode = themeModeStore((state) => state.setThemeMode)

  return (
    <IconButton
      onClick={() => { themeMode === "light" ? setThemeMode("dark") : setThemeMode("light") }}
      sx={{ ml: 1 }}
      color="inherit"
    >
      {themeMode === "light" ? <Brightness3 /> : <Brightness7 />}
    </IconButton>)
}
