import { useState, useEffect } from "react"
import getMe from "../../services/userService.jsx";

import CardStatics from "../../components/ui/Card_Statics.jsx";
import { BiCart, BiWallet } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";
import { FiShoppingBag } from "react-icons/fi";

import OrderDetails from "../../components/OrderDetails.jsx";
import OrdersList from "../../components/OrderList.jsx";

export default function Home() {

    const [user, setUser] = useState("");
    const [selectedOrder, setSelectedOrder] = useState(null);

    useEffect(() => {
        async function fetchUser() {
            const data = await getMe();

            setUser(data);
        }
        fetchUser();
    }, []);

    return (
        <>
            <div className="w-full h-full">
                <div className="p-[32px]">
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-2xl font-semibold">{`Bem-Vindo de volta, ${user?.name}!`}</h1>
                            <p className="text-sm text-[#94A3B8]">Acompanhe o status das suas entregas e explore novos produtos.</p>
                        </div>

                        <div className="grid grid-cols-3 gap-6">

                            <CardStatics
                                title="Pedidos Ativos"
                                value={3}
                                description="+1 novo pedido esta semana"
                                icon={FiShoppingBag}
                                color={"text-[#2BB6B1]"}
                            />

                            <CardStatics
                                title="Entregas em Rota"
                                value={1}
                                description="Chegando hoje até as 18:00"
                                icon={TbTruckDelivery}
                                color={"text-[#F59E0B]"}
                            />

                            <CardStatics
                                title="Total Gasto (Mês)"
                                value={"R$ 1.240"}
                                description="Histórico de compras disponível"
                                icon={BiWallet}
                                color={"text-[#10B981]"}
                            />

                        </div>

                        <div className="grid grid-cols-3 gap-6">

                            {/* ESQUERDA */}
                            <div className="col-span-2">
                                <OrderDetails order={selectedOrder} />
                            </div>

                            {/* DIREITA */}
                            <div>
                                <OrdersList onSelectOrder={setSelectedOrder} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}