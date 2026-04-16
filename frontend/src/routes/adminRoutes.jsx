import { Route } from "react-router-dom";
import AdminRoute from "./adminRoute.jsx";

// páginas admin
import AdminLayout from "../layouts/MainLayoutAdmin.jsx"
import AdminDashboard from "../pages/admin/AdminDashboard.jsx";
import Products from "../pages/admin/Products.jsx";
import Delivery from "../pages/admin/Delivery.jsx";
import Metrics from "../pages/admin/Metrics.jsx";
import Orders from "../pages/admin/Orders.jsx";
import Stock from "../pages/admin/Stock.jsx";

const adminRoutes = (
    <>
        <Route
            element={
                <AdminRoute>
                    <AdminLayout />
                </AdminRoute>
            }
        >
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/products" element={<Products />} />
            <Route path="/admin/deliveries" element={<Delivery />} />
            <Route path="/admin/metrics" element={<Metrics />} />
            <Route path="/admin/orders" element={<Orders />} />
            <Route path="/admin/stock" element={<Stock />} />
        </Route>
    </>
);

export default adminRoutes;