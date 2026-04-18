import LabelInput from "./Label_input";
import { useState } from "react";
import api from "../../services/api";
import { RxCross2 } from "react-icons/rx";

export default function Form({onClose}) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("quantity", quantity);
      formData.append("image", image);

      await api.post("/product", formData);

      alert("Produto criado com sucesso!");
      setName("");
      setDescription("");
      setPrice("");
      setQuantity("");
      setImage("");

    } catch (error) {
      console.error(error);
      alert("Erro ao cadastrar produto");
    }
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-[60vh] bg-white p-6 rounded-lg shadow-lg border border-[#0000001f]">
        <div className="flex justify-between">
        <h1 className="text-lg font-semibold mb-4">Cadastro de Produto</h1>
        <RxCross2 onClick={onClose} size={20} className="cursor-pointer"/>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">

          <LabelInput
            label="Nome do produto"
            id="name_form_product"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <LabelInput
            label="Descrição"
            id="description_form_product"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <LabelInput
            label="Imagem"
            id="image_form_product"
            type="file"
            onChange={(e)=>setImage(e.target.files[0])}
            preview={image ? URL.createObjectURL(image) : null}
            />

          <LabelInput
            label="Preço do produto"
            id="price_form_product"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <LabelInput
            label="Quantidade"
            id="quantity_form_product"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />

          <button
            type="submit"
            className="p-3 border border-[#FBDCDB] text-[#920602] hover:bg-[#920602] hover:text-white"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}