import { useContext } from "react";
import { AuthContext } from "../auth-provider";
import { AuthButton } from "./auth-button";
import styles from "./auth-block.module.css";

export function AuthBlock() {
  const user = useContext(AuthContext);
  return (
    <div className={styles.authBlockMargins}>
      {user && user.user ? (
        <div className={styles.authBlockName}>Привет, {user.user.name}</div>
      ) : null}
      <AuthButton />
    </div>
  );
}
