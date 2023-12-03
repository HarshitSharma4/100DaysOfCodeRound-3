import { useEffect, useState } from "react";
import { ThemeProvider } from "./Context/Theme";
import Navigation from "./Components/Navgation/Navigation";
import Home from "./Pages/Home";
import ChangeMode from "./Components/ChangeMode";
import ChangeColorTheme from "./Components/ChangeColorTheme";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Project from "./Pages/Project";
import ContactMe from "./Pages/ContactMe";
import ScrollToTop from "./Components/ScrollToTop";
import Loading from "./Components/Loading";
function App() {
  const [themeMode, setThemeMode] = useState("dark");
  const [colorTheme, setColorTheme] = useState({
    text: "text-green",
    background: "bg-green",
    border: "border-green",
    btn: "hover:bg-green hover:text-slate-700",
  });
  const [loading, setLoading] = useState(true);
  const toggleTheme = () => {
    if (themeMode === "dark") setThemeMode("light");
    else setThemeMode("dark");
  };
  const greenColorTheme = () => {
    setColorTheme({
      text: "text-green",
      background: "bg-green",
      border: "border-green",
      btn: "hover:bg-green hover:text-slate-700",
    });
  };
  const yellowColorTheme = () => {
    setColorTheme({
      text: "text-yellow",
      background: "bg-yellow",
      border: "border-yellow",
      btn: "hover:bg-yellow hover:text-slate-700",
    });
  };
  const blueColorTheme = () => {
    setColorTheme({
      text: "text-blue",
      background: "bg-blue",
      border: "border-blue",
      btn: "hover:bg-blue hover:text-slate-700",
    });
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
    const intervel = setInterval(() => {
      setLoading(false);
    }, 1850);
    return () => clearInterval(intervel);
  }, [themeMode]);
  return (
    <ThemeProvider
      value={{
        themeMode,
        colorTheme,
        toggleTheme,
        greenColorTheme,
        blueColorTheme,
        yellowColorTheme,
      }}
    >
      {loading ? (
        <Loading />
      ) : (
        <div className="bg-bgTheme dark:bg-darkBgTheme text-textLignt flex gap-0">
          <Navigation />
          <ChangeMode />
          <ChangeColorTheme />
          <ScrollToTop />
          <div className="flex-grow overflow-hidden">
            <Home />
            <Skills />
            <Project />
            <About />
            <ContactMe />
          </div>
        </div>
      )}
    </ThemeProvider>
  );
}

export default App;
