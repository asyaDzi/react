import { NavLink } from "react-router";
import { AuthBlock } from "../auth/auth-block";
import { ThemeSwitch } from "../theme-switch/theme-switch";

export default function Header() {
  return (
    <header>
      <ThemeSwitch />
      <AuthBlock />
      <NavLink to="/basket">Корзина</NavLink>
    </header>
  );
}
