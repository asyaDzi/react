import RestaurantsList from "./components/main-block/main-block";
import Restaurants from "./const/mock";
import LayoutComponent from "./components/layout-component/layout-component";
import ThemeProvider from "./components/theme-provider/theme-provider";
import AuthProvider from "./components/auth-provider/auth-provider";
export interface ParentCompProps {
  children?: React.ReactNode;
}

function App() {
  return (
    <>
      <ThemeProvider>
        <AuthProvider>
          <LayoutComponent
            children={<RestaurantsList restaurantsArray={Restaurants} />}
          />
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
