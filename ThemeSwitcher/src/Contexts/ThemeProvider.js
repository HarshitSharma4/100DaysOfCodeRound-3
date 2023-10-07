import { useContext, createContext } from "react";

export const ThemeContext = createContext({
  ThemeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

function useTheme() {
  return useContext(ThemeContext);
}
export default useTheme;
