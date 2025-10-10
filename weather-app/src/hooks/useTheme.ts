import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export const useThemeContext = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error("Theme context must be wrapped in its provider to be used");
  }
  return themeContext;
};
