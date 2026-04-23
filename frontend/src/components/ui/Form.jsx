import LabelInput from "./Label_input";
import { useState, useEffect } from "react";
import api from "../../services/api";
import { RxCross2 } from "react-icons/rx";

export default function Form({ onClose, product }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (product) {
      setName(product.name || "");
      setDescription(product.description || "");
      setPrice(product.price || "");
      setQuantity(product.quantity || "");
    }
  }, [product]);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("quantity", quantity);

      if (image) {
        formData.append("image", image);
      }

      if (product) {
        await api.put(`/product/${product.id}`, formData);
        alert("Produto atualizado com sucesso!");
      } else {
        await api.post("/product", formData);
        alert("Produto criado com sucesso!");
      }

      onClose();
      window.location.reload(); // 🔥 simples e funciona sempre

    } catch (error) {
      console.error(error);
      alert("Erro ao salvar produto");
    }
  }

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/40">
      <div className="flex flex-col w-[60vh] bg-white p-6 rounded-lg shadow-lg">

        <div className="flex justify-between items-center mb-4">
          <h1 className="text-lg font-semibold">
            {product ? "Editar Produto" : "Cadastro de Produto"}
          </h1>
          <RxCross2 onClick={onClose} size={20} className="cursor-pointer" />
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">

          <LabelInput
            label="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <LabelInput
            label="Descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <LabelInput 
          label="Imagem" 
          id="image_form_product" 
          type="file" 
          onChange={(e) => setImage(e.target.files[0])} 
          preview={image ? URL.createObjectURL(image) : null} />

          <LabelInput
            label="Preço"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <LabelInput
            label="Quantidade"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />

          <button
            type="submit"
            className="p-3 border border-[#FBDCDB] text-[#920602] hover:bg-[#920602] hover:text-white"
          >
            {product ? "Atualizar" : "Cadastrar"}
          </button>

        </form>
      </div>
    </div>
  );
}