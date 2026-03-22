import Button from "../button/button";
import { useTheme } from "../theme-provider/theme-hook";

export const ThemeSwitch = () => {
  const { toggleTheme } = useTheme();

  return <Button text="Toggle Theme" disabled={false} action={toggleTheme} />;
};
