import CardTop from "../../components/ui/Card_Top.jsx";
import Form from "../../components/ui/Form.jsx";
import Table from "../../components/ui/Table.jsx";

import { BiBell } from "react-icons/bi";
import { MdDeleteOutline, MdModeEdit, MdAdd } from "react-icons/md";

export default function Products() {


    return (
        <>
            <div className="flex flex-col">
                            <CardTop
                            title={"Lista de Produtos Cadastrados"}
                            subtitle={"Visão geral Operacional"}
                            place={"Buscar produto"}
                            iconA={MdDeleteOutline}
                            descA={"Deletar"}
                            iconB={MdModeEdit}
                            descB={"Editar"}
                            iconC={MdAdd}
                            descC={"Novo produto"}
                            onClickC={null}/>


                        <div>
                            <Table/>
                        </div>
                        </div>

        </>
    )
}