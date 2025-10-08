import { useTheme } from "../../contexts/ThemeContext";
import { DarkModeSVG } from "../SVG/DarkModeSVG";
import { LightModeSVG } from "../SVG/LightModeSVG";

export const ThemeSwitcher = () => {
  const { toggleDarkMode, darkMode } = useTheme();

  return (
    <button
      className="fixed size-20 z-10 bottom-8 dark:bg-white   right-0 p-2 pr-6 border-2 border-blue-950 border-r-0 rounded-l-2xl"
      onClick={toggleDarkMode}
    >
      {darkMode ? <LightModeSVG /> : <DarkModeSVG />}
    </button>
  );
};
