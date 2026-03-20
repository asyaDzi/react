import { createContext } from "react";
import type { User } from "../../interfaces/user";

export type PartialUser = Partial<Pick<User, "name">>;

export interface AuthContextType {
  user: PartialUser | null;
  toggleUser: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);
