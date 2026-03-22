import { AuthBlock } from "../auth/auth-block";
import { ThemeSwitch } from "../theme-switch/theme-switch";

export default function Header() {
  return (
    <header>
      <ThemeSwitch />
      <AuthBlock />
    </header>
  );
}
