import AdminSidebar from "../components/ui/Sidebar.jsx";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="flex p-6 bg-[#EEF7F7]">
      <AdminSidebar />

      <main className="flex-1 ps-6 bg-[#EEF7F7] min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}