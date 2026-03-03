import Restaurants from "../../const/mock";
import RestaurantCard from "../restaurant-card/restorant-card";
import "./restorant-list.css";

function RestaurantsList() {
  return (
      <div className="container">
        {Restaurants.map((o) => (
          <RestaurantCard key={o.id} {...o}></RestaurantCard>
        ))}
      </div>
  );
}

export default RestaurantsList;
