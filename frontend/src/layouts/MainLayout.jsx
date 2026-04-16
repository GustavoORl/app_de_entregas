import { Outlet } from "react-router-dom";
import Header from "../components/ui/Header";

export default function MainLayout(){
    return(
        <>
            <Header/>
            <main className="px-60">
                <Outlet/>
            </main>
        </>
    )
}