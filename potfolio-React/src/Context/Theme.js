import { createContext, useContext } from "react";

export const theme = createContext({
  themeMode: "light",
  colorTheme: "Green",
  toggleTheme: () => {},
  greenColorTheme: () => {},
  yellowColorTheme: () => {},
  blueColorTheme: () => {},
});

export const ThemeProvider = theme.Provider;

export const useTheme = () => {
  return useContext(theme);
};
//export default useTheme;
