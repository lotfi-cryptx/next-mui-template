import useDarkTheme from "@/hooks/useDarkTheme";
import { Brightness3, Brightness7 } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useBetween } from "use-between";


export default function ThemeSwitch() {

  const { selectedTheme, setTheme } = useBetween(useDarkTheme);

  return (
    <IconButton
      sx={{ ml: 1 }}
      onClick={() => {
        setTheme(selectedTheme === 'light' ? 'dark' : 'light')
      }}
      color="inherit"
    >
      {selectedTheme === 'light' ? <Brightness3 /> : <Brightness7 />}
    </IconButton>)
}
