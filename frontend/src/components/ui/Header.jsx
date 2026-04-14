import Image from "../../images/logo_colorido.png"
import { BiBell, BiCart, BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header className="w-screen min-h-[10vh] bg-white">
                <div className="w-full h-full px-64">
                    <div className="w-full h-full flex justify-between items-center">
                        <div className="h-[10vh] flex items-center gap-2">
                            <div className="h-10 w-10 bg-[#920602] rounded-lg"></div>
                            <h3 className="font-bold">SmartLog</h3>
                        </div>

                        <nav>
                            <ul className="flex gap-8">
                                <li>
                                    <Link>Dashboard</Link></li>
                                <li>
                                    <Link>Meus Pedidos</Link></li>
                                <li>
                                    <Link>Produtos</Link></li>
                            </ul>
                        </nav>

                        <div className="flex gap-8">
                            <div className="flex items-center gap-8">
                                <BiCart size={25} />
                                <BiBell size={25} />
                            </div>
                            <div className="flex items-center gap-4 pl-8 border-l-1">
                                <div className="leading-none text-end">
                                    <h1>Gustavo Ribeiro</h1>
                                    <h6 className="text-gray-600 text-sm">Administrador</h6>
                                </div>
                                <div className="rounded-full border-1 border-black">
                                <BiUser size={40} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}