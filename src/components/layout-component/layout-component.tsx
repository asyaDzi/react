import type { PropsWithChildren } from "react";
import Header from "../header/header";
import Scroll from "../horizontar-scroll/horizontal-scroll";
import useScrollLogic from "../horizontar-scroll/horizontal-scroll-logic";
import { Outlet } from "react-router";

export default function LayoutComponent() {
  const { progress, scrollHandler } = useScrollLogic();

  return (
    <div className="scroll-wrapper" onScroll={scrollHandler}>
      <Scroll {...{ width: progress }} />
      <article>
        <Header />
        <Outlet />
        <footer>Подвал</footer>
      </article>
    </div>
  );
}
