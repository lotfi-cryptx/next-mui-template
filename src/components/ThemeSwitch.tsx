import { Brightness3, Brightness7 } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useTheme } from "next-themes";


export default function ThemeSwitch() {

  const { resolvedTheme, setTheme } = useTheme();

  return (
    <IconButton
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      sx={{ ml: 1 }}
      color="inherit"
    >
      {resolvedTheme === "light" ? <Brightness3 /> : <Brightness7 />}
    </IconButton>)
}
