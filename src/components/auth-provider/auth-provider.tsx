import { useState, type PropsWithChildren } from "react";
import { AuthContext, type PartialUser } from ".";
import type { User } from "../../interfaces/user";

const fakeUser: User = {
  id: "df-123",
  name: "Федор",
};

export default function AuthProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<PartialUser | null>(null);

  const toggleUser = () => {
    setUser((prevUser) => (!prevUser ? fakeUser : null));
  };

  return <AuthContext value={{ user, toggleUser }}>{children}</AuthContext>;
}
