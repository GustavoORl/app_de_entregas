import {
  LayoutDashboard,
  Box,
  Archive,
  Truck,
  ShoppingCart,
  BarChart3,
  AlertTriangle,
  Clock,
  Settings,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import getMe from "../../services/userService";

import SidebarItem from "./SidebarItem";

export default function AdminSidebar() {
    const [user, setUser] = useState("");

    useEffect(()=>{
        async function fetchUser(){
            const data = await getMe();

            setUser(data);
        }

        fetchUser();
    },[]);


  return (
    <aside className="border border-[#0000001f] min-h-full bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between">
      
      {/* TOPO */}
      <div>
        {/* LOGO */}
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-[#920602] p-5.5 rounded-md">
          </div>
          <div>
            <h1 className="text-2xl font-bold">SmartLog</h1>
            <p className="text-sm text-[#94A3B8]">Painel administrativo</p>
          </div>
        </div>

        {/* NAVEGAÇÃO */}
        <div className="mb-3">
          <p className="text-sm text-[#94A3B8] mb-3">Navegação</p>

          <nav className="flex flex-col gap-2 text-sm">
            <SidebarItem to="/admin" end icon={LayoutDashboard} label="Dashboard" />
            <SidebarItem to="/admin/products" icon={Box} label="Produtos" />
            <SidebarItem to="/admin/stock" icon={Archive} label="Estoque" />
            <SidebarItem to="/admin/deliveries" icon={Truck} label="Entregas" />
            <SidebarItem to="/admin/orders" icon={ShoppingCart} label="Pedidos" />
            <SidebarItem to="/admin/metrics" icon={BarChart3} label="Métricas" />
          </nav>
        </div>

        {/* ALERTAS */}
      <div>
        <p className="text-sm text-[#94A3B8] mb-3">Alertas rápidos</p>

        <div className="flex flex-col gap-3">
          
          {/* ALERTA 1 */}
          <div className="border border-[#0000001f] rounded-xl p-4 flex justify-between items-center shadow-sm">
            <div>
              <p className="text-sm text-[#94A3B8]">Reposição urgente</p>
              <h2 className="font-bold text-lg">8 SKUs</h2>
            </div>
            <AlertTriangle className="text-orange-500" />
          </div>

          {/* ALERTA 2 */}
          <div className="border border-[#0000001f] rounded-xl p-4 flex justify-between items-center shadow-sm">
            <div>
              <p className="text-sm text-[#94A3B8]">Entregas atrasadas</p>
              <h2 className="font-bold text-lg">3 rotas</h2>
            </div>
            <Clock className="text-red-500" />
          </div>

        </div>
      </div>

      </div>

      
      <div>
        <div className="shadow-sm rounded-xl p-4 flex gap-3 items-center">
            <div className="rounded-full h-10 w-10 bg-black">

            </div>
            <div>
                <h1 className="text-sm font-semibold">{user?.name} {user?.lastname}</h1>
                <p className="text-xs text-[#94A3B8]">{user?.role}</p>
            </div>
            <Settings size={20}/>
        </div>
      </div>
    </aside>
  );
}