import { Route } from "react-router-dom";
import PrivateRoute from "./privateRoute.jsx";

// páginas do usuário
import Home from "../pages/Home.jsx";
// import Products from "../pages/user/Products";
// import ProductDetails from "../pages/user/ProductDetails";
// import Cart from "../pages/user/Cart";
// import Orders from "../pages/user/Orders";
// import OrderDetails from "../pages/user/OrderDetails";
// import DeliveryTracking from "../pages/user/DeliveryTracking";
// import Profile from "../pages/user/Profile";

const userRoutes = (
  <>
    <Route
      path="/home"
      element={
        <PrivateRoute>
          <Home />
        </PrivateRoute>
      }
    />

    {/* <Route
      path="/products"
      element={
        <PrivateRoute>
          <Products />
        </PrivateRoute>
      }
    />

    <Route
      path="/products/:id"
      element={
        <PrivateRoute>
          <ProductDetails />
        </PrivateRoute>
      }
    />

    <Route
      path="/cart"
      element={
        <PrivateRoute>
          <Cart />
        </PrivateRoute>
      }
    />

    <Route
      path="/orders"
      element={
        <PrivateRoute>
          <Orders />
        </PrivateRoute>
      }
    />

    <Route
      path="/orders/:id"
      element={
        <PrivateRoute>
          <OrderDetails />
        </PrivateRoute>
      }
    />

    <Route
      path="/deliveries/:id"
      element={
        <PrivateRoute>
          <DeliveryTracking />
        </PrivateRoute>
      }
    />

    <Route
      path="/profile"
      element={
        <PrivateRoute>
          <Profile />
        </PrivateRoute>
      }
    /> */}
  </>
);

export default userRoutes;