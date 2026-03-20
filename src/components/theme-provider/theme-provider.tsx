import { useState } from "react";
import { ThemeContext, type Theme } from ".";
import type { ParentCompProps } from "../../App";

export default function ThemeProvider({ children }: ParentCompProps) {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
}
