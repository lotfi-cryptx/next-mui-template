import { useTheme } from "next-themes";
import { ThemeProvider as MuiThemeProvider } from "@mui/system";
import { lightTheme, darkTheme } from "@/config/theme";
import { ReactNode, useEffect, useState } from "react";

export default function ThemeProvider({ children }: { children: ReactNode }) {

  const { resolvedTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(darkTheme);

  useEffect(() => {
    resolvedTheme === "light"
      ? setCurrentTheme(lightTheme)
      : setCurrentTheme(darkTheme);
  }, [resolvedTheme]);

  return (
    <MuiThemeProvider theme={currentTheme}>
      {children}
    </MuiThemeProvider>
  );
};
