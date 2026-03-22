import { useState, type PropsWithChildren } from "react";
import { ThemeContext, type Theme } from ".";

export default function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
}
