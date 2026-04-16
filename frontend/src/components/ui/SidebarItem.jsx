import { NavLink } from "react-router-dom";


export default function SidebarItem({ to, icon: Icon, label }) {
  return (
    <NavLink
      to={to}
      end={to === "/admin"}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 rounded-xl transition ${
          isActive
            ? "bg-[#f19c995b] text-[#920602]"
            : "text-gray-700 hover:bg-gray-100"
        }`
      }
    >
      <Icon size={20} />
      <span className="font-medium">{label}</span>
    </NavLink>
  );
}