import { useState, type SetStateAction } from "react";
import Scroll from "./components/horizontar-scroll/horizontal-scroll";
import RestaurantsList from "./components/main-block/main-block";
import Restaurants from "./const/mock";
interface ParentCompProps {
  childComp?: React.ReactNode;
}

const notEmptyData = Restaurants.length > 0;

const MainComponent: React.FC<ParentCompProps> = (props) => {
  const { childComp } = props;
  const [progress, setProgress] = useState(0);

  const scrollHandler = (event: React.UIEvent<HTMLDivElement>) => {
    const containerHeight = event.currentTarget.clientHeight;
    const scrollHeight = event.currentTarget.scrollHeight;
    const scrollTop = event.currentTarget.scrollTop;

    setProgress((scrollTop / (scrollHeight - containerHeight)) * 100);
  };

  return (
    <div className="scroll-wrapper" onScroll={scrollHandler}>
      <Scroll {...{ width: progress }} />
      <article>
        <header>Шапка</header>
        <main>
          {notEmptyData ? childComp : <div>Нет доступных ресторанов</div>}
        </main>
        <footer>Подвал</footer>
      </article>
    </div>
  );
};

function App() {
  return (
    <MainComponent
      childComp={<RestaurantsList restaurantsArray={Restaurants} />}
    />
  );
}

export default App;
