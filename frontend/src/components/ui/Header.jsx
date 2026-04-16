import Image from "../../images/logo_colorido.png"
import { BiBell, BiCart, BiUser } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import getMe from "../../services/userService";

export default function Header() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        async function fetchUser() {
            const data = await getMe();
            setUser(data);
        }

        fetchUser();
    }, []);

    return (
        <>
            <header className="w-screen min-h-[10vh] bg-white">
                <div className="w-full h-full px-60">
                    <div className="w-full h-full flex justify-between items-center px-[32px]">
                        <div className="h-[10vh] flex items-center">
                            <NavLink className="flex items-center gap-2" to={"/home"}>
                                <div className="h-10 w-10 bg-[#920602] rounded-lg"></div>
                                <h3 className="text-lg font-bold">SmartLog</h3>
                            </NavLink>
                        </div>

                        <nav>
                            <ul className="flex gap-8 text-sm font-medium">
                                <li>
                                    <NavLink
                                        to="/home"
                                        className={({ isActive }) =>
                                            isActive ? "text-[#920602] font-bold" : "text-[#94A3B8]"
                                        }
                                    >
                                        Dashboard
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to="/orders"
                                        className={({ isActive }) =>
                                            isActive ? "text-[#920602] font-bold" : "text-[#94A3B8]"
                                        }
                                    >
                                        Meus Pedidos
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to="/products"
                                        className={({ isActive }) =>
                                            isActive ? "text-[#920602] font-bold" : "text-[#94A3B8]"
                                        }
                                    >
                                        Produtos
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>

                        <div className="flex gap-8">
                            <div className="flex items-center gap-8">
                                <BiCart size={25} />
                                <BiBell size={25} />
                            </div>
                            <div className="flex items-center gap-4 pl-8 border-l-1">
                                <div className="leading-none text-end">
                                    <h1 className="text-sm font-bold">{user?.name} {user?.lastname}</h1>
                                    <h6 className="text-gray-600 text-xs">{user?.role}</h6>
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