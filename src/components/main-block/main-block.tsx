import { useState } from "react";
import type { Restaurant } from "../../interfaces/restaurant";
import RestaurantCard from "../restaurant-card/restorant-card";
import TabButtons from "../tabs/tabs";

function RestaurantsList(restaurants: { restaurantsArray: Restaurant[] }) {
  const [activeTab, setActiveTab] = useState(0);
  const restaurantsListNotEmty = restaurants.restaurantsArray.length > 0;

  return (
    <>
      {restaurantsListNotEmty ? (
        <div>
          <TabButtons
            restaurant={restaurants.restaurantsArray}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          <RestaurantCard
            key={restaurants.restaurantsArray[activeTab].id}
            {...restaurants.restaurantsArray[activeTab]}
          />
        </div>
      ) : (
        <div>Нет доступных ресторанов</div>
      )}
    </>
  );
}

export default RestaurantsList;
