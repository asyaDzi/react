import type { Restaurant } from "../../interfaces/restaurant";
import "./tabs.css";

export default function TabButtons(restaurants: {
  restaurant: Restaurant[];
  activeTab: number;
  setActiveTab: (index: number) => void;
}) {
  return (
    <div className="tabs-header">
      {restaurants.restaurant.map((restorant, index) => (
        <li
          className={
            index === restaurants.activeTab ? "active tab-button" : "tab-button"
          }
          key={restorant.id}
          onClick={() => restaurants.setActiveTab(index)}
        >
          {restorant.name}
        </li>
      ))}
    </div>
  );
}
