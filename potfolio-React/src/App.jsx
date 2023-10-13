import { useEffect, useState } from "react";
import { ThemeProvider } from "./Context/Theme";

function App() {
  const [themeMode, setThemeMode] = useState("dark");
  const [colorTheme, setColorTheme] = useState("green");
  const toggleTheme = () => {
    if (themeMode === "dark") setThemeMode("light");
    else setThemeMode("dark");
  };
  const provideColorTheme = (color) => {
    setColorTheme(color);
  };
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  return (
    <ThemeProvider
      value={{ themeMode, colorTheme, toggleTheme, provideColorTheme }}
    >
      <div className="dark:bg-baseTheme h-screen w-screen"></div>
    </ThemeProvider>
  );
}

export default App;
