import RestaurantsList from "../main-block/main-block";
import "./layout.css";
import Restaurants from "../../const/mock";

function Layout() {
  const notEmptyData = Restaurants.length > 0;
  return (
    <article className="grid-wrapper">
      <header>Шапка</header>
      <main>
        {notEmptyData ? (
          <RestaurantsList restaurantsArray={Restaurants}></RestaurantsList>
        ) : (
          <div>Нет доступных ресторанов</div>
        )}
      </main>
      <footer>Подвал</footer>
    </article>
  );
}

export default Layout;
