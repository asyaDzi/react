import Scroll from "./components/horizontar-scroll/horizontal-scroll";
import RestaurantsList from "./components/main-block/main-block";
import Restaurants from "./const/mock";
import useScrollLogic from "./components/horizontar-scroll/horizontal-scroll-logic";
interface ParentCompProps {
  childComp?: React.ReactNode;
}

const notEmptyData = Restaurants.length > 0;

const MainComponent: React.FC<ParentCompProps> = (props) => {
  const { childComp } = props;
  const { progress, scrollHandler } = useScrollLogic();

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
