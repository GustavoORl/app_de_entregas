import CardTop from "../../components/ui/Card_Top.jsx";
import Form from "../../components/ui/Form.jsx";
import Table from "../../components/ui/Table.jsx";

import { useState } from "react";
import { MdDeleteOutline, MdModeEdit, MdAdd } from "react-icons/md";

export default function Products() {

    const [showForm, setShowForm] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [deleteSelected, setDeleteSelected] = useState(null);

    function handleNewProduct(){
        setEditingProduct(null);
        setShowForm(true);
    }

    return (
        <div className="flex flex-col">

            <CardTop
    title={"Lista de Produtos Cadastrados"}
    subtitle={"Visão geral Operacional"}
    place={"Buscar produto"}
    iconA={MdDeleteOutline}
    descA={"Deletar"}
    iconC={MdAdd}
    descC={"Novo produto"}
    onClickA={deleteSelected} // 🔥 AQUI
    onClickC={handleNewProduct}
/>

            <Table 
                setShowForm={setShowForm}
                setEditingProduct={setEditingProduct}
                setDeleteSelected={setDeleteSelected}
            />

            {showForm && (
                <Form 
                    product={editingProduct}
                    onClose={() => {
                        setShowForm(false);
                        setEditingProduct(null);
                    }}
                />
            )}

        </div>
    )
}