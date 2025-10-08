import { useTheme } from "../../contexts/ThemeContext";
import darkModeSVG from "../../assets/dark-mode.svg";
import lightModeSVG from "../../assets/light-mode.svg";

export const ThemeSwitcher = () => {
  const { toggleDarkMode, darkModeOn } = useTheme();

  return (
    <button
      className={`fixed w-24 h-18 z-10 bottom-8 bg-white  cursor-pointer right-0 px-2  border-2 border-blue-950 border-r-0 rounded-l-2xl `}
      onClick={toggleDarkMode}
    >
      <img src={darkModeOn ? darkModeSVG : lightModeSVG} alt="" />
    </button>
  );
};
