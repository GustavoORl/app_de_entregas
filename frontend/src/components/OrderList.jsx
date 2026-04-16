import { NavLink } from "react-router-dom";

export default function OrdersList({ onSelectOrder }) {
  const orders = [
    { id: "ORD-1", status: "PENDING", product: "Fone", price: 499 },
    { id: "ORD-2", status: "PENDING", product: "Teclado", price: 350 },
  ];

  return (
    <div className="flex flex-col gap-4 h-full">
        <div className="flex justify-between">
        <h1 className="text-lg font-semibold">Pedidos Recentes</h1>
        <NavLink className="text-[#920602] text-sm font-normal hover:font-semibold" to={"/"}>Ver todos</NavLink>
        </div>
    <div className="bg-white p-4 rounded-xl h-full">

      {orders.map((order) => (
        <div
          key={order.id}
          className="p-3 border rounded-lg mb-2 cursor-pointer hover:bg-gray-50"
          onClick={() => {
            if (order.status === "PENDING") {
              onSelectOrder(order); // 🔥 AQUI
            }
          }}
        >
          <p className="font-medium">{order.product}</p>
          <span className="text-sm text-gray-500">{order.id}</span>
        </div>
      ))}
    </div>
    </div>
  );
}