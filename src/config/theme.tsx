import { createTheme } from '@mui/material/styles';


// Create light theme instance.
const constructTheme = (mode: "light" | "dark") => (createTheme({
  palette: {
    mode: mode,
    // primary: {
    //   main: '#a4a7b3',
    // },
    // secondary: {
    //   main: '#19857b',
    // },
  }
}));

export default constructTheme;