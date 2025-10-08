import { createContext, useContext, useEffect, useState } from "react";

type ThemeContextType = {
  darkModeOn: boolean;
  toggleDarkMode: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkModeOn, setDarkModeOn] = useState(() => {
    const themePreference = localStorage.getItem("theme");
    return themePreference === "dark";
  });

  const toggleDarkMode = () => setDarkModeOn(!darkModeOn);

  useEffect(() => {
    const root = document.documentElement;

    if (darkModeOn) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", darkModeOn ? "dark" : "light");
  }, [darkModeOn]);

  return (
    <ThemeContext.Provider value={{ darkModeOn, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error("Theme context must be wrapped in its provider to be used");
  }
  return themeContext;
};
