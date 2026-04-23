import api from "../../services/api";
import { useState, useEffect } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";

export default function Table({ setShowForm, setEditingProduct, setDeleteSelected }){

    const [products, setProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);

    async function fetchProducts(){
        try{
            const response = await api.get("/product");
            setProducts(response.data);
        } catch(error){
            console.log("Erro ao procurar produtos: ", error);
        }
    }

    useEffect(()=>{
        fetchProducts();
    },[]);

    function toggleSelect(id){
        if(selectedProducts.includes(id)){
            setSelectedProducts(selectedProducts.filter(item => item !== id));
        } else {
            setSelectedProducts([...selectedProducts, id]);
        }
    }

    function toggleSelectAll(){
        if(selectedProducts.length === products.length){
            setSelectedProducts([]);
        } else {
            setSelectedProducts(products.map(p => p.id));
        }
    }


    async function handleDeleteSelected(){
    if(selectedProducts.length === 0){
        alert("Selecione pelo menos um item");
        return;
    }

    const confirm = window.confirm("Deletar todos os selecionados?");
    if(!confirm) return;

    try{
        await Promise.all(
            selectedProducts.map(id => api.delete(`/product/${id}`))
        );

        setProducts(products.filter(p => !selectedProducts.includes(p.id)));
        setSelectedProducts([]);
    } catch(error){
        console.log(error);
    }
}

    // 🔥 envia função pro Products.jsx
    useEffect(() => {
        if (setDeleteSelected) {
            setDeleteSelected(() => handleDeleteSelected);
        }
    }, [selectedProducts]);

    return(
        <div className="py-4">

            <div className="overflow-x-auto shadow-lg rounded-2xl">
                <table className="w-full text-sm text-left">
                    
                    <thead className="bg-[#920602] text-white">
                        <tr>
                            <th className="px-4 py-3">
                                <input 
                                    type="checkbox"
                                    onChange={toggleSelectAll}
                                    checked={selectedProducts.length === products.length && products.length > 0}
                                />
                            </th>
                            <th className="px-6 py-3">Nome</th>
                            <th className="px-6 py-3">Descrição</th>
                            <th className="px-6 py-3">Quantidade</th>
                            <th className="px-6 py-3">Preço</th>
                            <th className="px-6 py-3 text-center">Editar</th>
                        </tr>
                    </thead>

                    <tbody>
                        {products.map((product, index) => (
                            <tr 
                                key={product.id} 
                                className={`border-b hover:bg-gray-100 transition ${
                                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                                }`}
                            >
                                <td className="px-4 py-4">
                                    <input 
                                        type="checkbox"
                                        checked={selectedProducts.includes(product.id)}
                                        onChange={() => toggleSelect(product.id)}
                                    />
                                </td>

                                <td className="px-6 py-4 font-semibold text-gray-800">
                                    {product.name}
                                </td>

                                <td className="px-6 py-4 text-gray-600">
                                    {product.description}
                                </td>

                                <td className="px-6 py-4">
                                    {product.quantity}
                                </td>

                                <td className="px-6 py-4 font-bold text-green-600">
                                    {Number(product.price).toLocaleString("pt-BR", {
                                        style: "currency",
                                        currency: "BRL"
                                    })}
                                </td>

                                <td className="px-6 py-4 flex justify-center gap-4">
                                    
                                    <button 
                                        onClick={() => {
                                            setEditingProduct(product);
                                            setShowForm(true);
                                        }}
                                        className="text-blue-600 hover:text-blue-800"
                                    >
                                        <FiEdit size={18} />
                                    </button>

                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>

        </div>
    )
}