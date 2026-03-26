import { Tabs } from "../tabs/tabs";
import { useSelector } from "react-redux";
import { Outlet } from "react-router";
import { selectrestaurantIds } from "../../redux/entities/restaurants.slice";
import { TabContainer } from "./restaurants-tab-container";

export interface TabProps {
  id: string;
  key?: string;
}

function RestaurantsPage() {
  const restaurantsIds = useSelector(selectrestaurantIds);
  return (
    <div>
      <h1>restaurants Page</h1>

      <Tabs>
        {restaurantsIds.map((id) => (
          <TabContainer key={id} id={id} />
        ))}
      </Tabs>

      <Outlet />
    </div>
  );
}

export default RestaurantsPage;
