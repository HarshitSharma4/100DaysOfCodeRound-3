import { createContext, useContext } from "react";

export const theme = createContext({
  themeMode: "dark",
  colorTheme: "green",
  toggleTheme: () => {},
  provideColorTheme: (theme) => {},
});

export const ThemeProvider = theme.Provider;

const useTheme = () => {
  return useContext(theme);
};
export default useTheme;
