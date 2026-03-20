import type { PropsWithChildren } from "react";
import Header from "../header/header";
import Scroll from "../horizontar-scroll/horizontal-scroll";
import useScrollLogic from "../horizontar-scroll/horizontal-scroll-logic";

export default function LayoutComponent({ children }: PropsWithChildren) {
  const { progress, scrollHandler } = useScrollLogic();

  return (
    <div className="scroll-wrapper" onScroll={scrollHandler}>
      <Scroll {...{ width: progress }} />
      <article>
        <Header />
        <main>{children}</main>
        <footer>Подвал</footer>
      </article>
    </div>
  );
}
