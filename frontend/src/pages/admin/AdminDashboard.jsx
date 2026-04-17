import Sidebar from "../../components/ui/Sidebar"
import CardTop from "../../components/ui/Card_Top"
import Form from "../../components/ui/Form";

import { MdOutlineFileDownload, MdAdd } from "react-icons/md";
import { BiBell } from "react-icons/bi";

import { useState } from "react";

export default function AdminDashboard(){

    const [showForm, setShowForm] = useState(false);

    function onClickC(){
        setShowForm(true);
    }

    return(
        <>
            <div className="flex flex-col">
                <CardTop
                title={"Estoque e entrega em um único painel"}
                subtitle={"Visão geral Operacional"}
                place={"Buscar produto, SDK ou pedido"}
                iconA={BiBell}
                iconB={MdOutlineFileDownload}
                descB={"Exportar"}
                iconC={MdAdd}
                descC={"Novo produto"}
                onClickC={onClickC}/>

                {showForm && <Form></Form>}
            </div>

            
        </>
    )
}