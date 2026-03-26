import { Tabs } from "../tabs/tabs";
import { useSelector } from "react-redux";
import { selectRestourantIds } from "../../redux/entities/restourants.slice";
import { Outlet } from "react-router";
import { TabContainer } from "./restourants-tab-container";

export interface TabProps {
  id: string;
  key?: string;
}

function RestaurantsPage() {
  const restourantsIds = useSelector(selectRestourantIds);
  return (
    <div>
      <h1>Restourants Page</h1>

      <Tabs>
        {restourantsIds.map((id) => (
          <TabContainer key={id} id={id} />
        ))}
      </Tabs>

      <Outlet />
    </div>
  );
}

export default RestaurantsPage;
