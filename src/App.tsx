import RestaurantsPage from "./components/restourants-page/restourants-page";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import LayoutComponent from "./components/layout-component/layout-component";
import ThemeProvider from "./components/theme-provider/theme-provider";
import AuthProvider from "./components/auth-provider/auth-provider";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import RestaurantCard from "./components/restaurant-card/restorant-card";
import HomePge from "./components/home/home";
import Menu from "./components/menu/menu";
import ReviewList from "./components/review/review";
import Dish from "./components/dish/dish";
import DishPage from "./components/dish/dish-page";
import BasketPage from "./components/basket/basket";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<LayoutComponent />}>
                <Route path="/" element={<HomePge />} />
                <Route path="restourants" element={<RestaurantsPage />}>
                  <Route path=":restourantId" element={<RestaurantCard />}>
                    <Route path="menu" element={<Menu />} />
                    <Route path="reviews" element={<ReviewList />} />
                  </Route>
                </Route>
                <Route path="dish/:dishId" element={<DishPage />} />
                <Route path="basket" element={<BasketPage />} />
              </Route>
              <Route path="*" element={<Navigate to={"/"} />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
