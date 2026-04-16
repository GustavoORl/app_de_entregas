import { NavLink } from "react-router-dom";

export default function OrderDetails({ order }) {
  if (!order) {
    return (
      <div className="bg-white p-6 rounded-xl">
        <p>Selecione um pedido para ver detalhes</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
        <div className="flex justify-between">
        <h1 className="text-lg font-semibold">Acompanhamento de Entrega</h1>
        <NavLink className="text-sm border px-2 py-1 rounded-md border-gray-200 hover:bg-[#920602] hover:text-amber-50" to={"/"}>Detalhes do Pedido</NavLink>
        </div>
    <div className="bg-white p-6 rounded-xl">
      <h2 className="font-bold mb-2">
        Pedido #{order.id}
      </h2>

      <p className="text-gray-600 mb-4">
        {order.product}
      </p>

      {/* MAPA */}
      <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
        <p>Mapa aqui (rota do pedido)</p>
      </div>

      {/* STATUS */}
      <div className="mt-4">
        <p>Status: {order.status}</p>
      </div>
    </div>
    </div>
  );
}