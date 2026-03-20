import { useContext } from "react";
import type { ButtonProps } from "../../interfaces/button";
import ClassNames from "classnames";
import styles from "./button.module.css";
import { ThemeContext } from "../theme-provider";

function Button(this: any, { text, disabled, action }: ButtonProps) {
  const theme = useContext(ThemeContext);

  return (
    <button
      className={ClassNames(styles.button, {
        [styles.dark]: theme?.theme === "dark",
        [styles.light]: theme?.theme === "light",
      })}
      disabled={disabled}
      onClick={action}
    >
      {text}
    </button>
  );
}

export default Button;
