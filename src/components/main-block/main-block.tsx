import { useState } from "react";
import type { Restaurant } from "../../interfaces/restaurant";
import RestaurantCard from "../restaurant-card/restorant-card";
import TabButtons from "../tabs/tabs";

function RestaurantsList(restaurants: { restaurantsArray: Restaurant[] }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="container">
      <TabButtons
        restaurant={restaurants.restaurantsArray}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      ></TabButtons>

      <RestaurantCard
        key={restaurants.restaurantsArray[activeTab].id}
        {...restaurants.restaurantsArray[activeTab]}
      ></RestaurantCard>
    </div>
  );
}

export default RestaurantsList;
