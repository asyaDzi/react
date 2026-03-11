import RestaurantsList from "./components/main-block/main-block";
import Restaurants from "./const/mock";
interface ParentCompProps {
  childComp?: React.ReactNode;
}

const notEmptyData = Restaurants.length > 0;

const MainComponent: React.FC<ParentCompProps> = (props) => {
  const { childComp } = props;
  return (
    <div>
      <article className="grid-wrapper">
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
