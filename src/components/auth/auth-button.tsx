import { useAuth } from "../auth-provider/auth-hook";
import Button from "../button/button";

export const AuthButton = () => {
  const { user, toggleUser } = useAuth();

  return (
    <>
      <Button
        text={user ? "Выйти" : "Войти"}
        disabled={false}
        action={toggleUser}
      />
    </>
  );
};
