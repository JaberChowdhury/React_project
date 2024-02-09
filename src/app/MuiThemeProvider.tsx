import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";

import { useAppSelector } from "@/app/hook";
import { themeSelector } from "@/features/theme/themeSlice";

interface propsType {
  children: React.ReactNode;
}

const MuiThemeProvider: React.FC<propsType> = ({ children }) => {
  const { dark } = useAppSelector(themeSelector);

  const themeData = createTheme({
    palette: {
      mode: dark ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={themeData}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MuiThemeProvider;
