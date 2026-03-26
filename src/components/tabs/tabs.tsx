import type { PropsWithChildren } from "react";
import styles from "./tabs.module.css";

export const Tabs = ({ children }: PropsWithChildren) => {
  return <div className={styles.tabsHeader}>{children}</div>;
};
