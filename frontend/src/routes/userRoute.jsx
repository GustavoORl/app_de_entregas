import { Route, Navigate } from "react-router-dom";
import PrivateRoute from "./privateRoute.jsx";

// páginas do usuário
import MainLayout from "../layouts/MainLayout.jsx";
import Home from "../pages/user/Home.jsx";
import Products from "../pages/user/Products.jsx"
// import ProductDetails from "../pages/user/ProductDetails";
// import Cart from "../pages/user/Cart";
import Orders from "../pages/user/Orders.jsx";
// import OrderDetails from "../pages/user/OrderDetails";
// import DeliveryTracking from "../pages/user/DeliveryTracking";
// import Profile from "../pages/user/Profile";

const userRoutes = (
  <>
      <Route
  path="/"
  element={
    (() => {
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user) return <Navigate to="/login" />;

      return user.role === "ADMIN"
        ? <Navigate to="/admin" />
        : <Navigate to="/home" />;
    })()
  }
/>
  <Route 
  element={
    <PrivateRoute>
      <MainLayout/>
    </PrivateRoute>
  }>
    <Route path="/home" element={<Home/>}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="/orders" element={<Orders/>}/>

  </Route>


    {/* <Route
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
    /> */}


    {/* <Route
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