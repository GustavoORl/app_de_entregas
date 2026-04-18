import api from "../../services/api"
import { useState, useEffect } from "react"

export default function Table(){
    const [products, setProducts] = useState([]);

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

    return(
        <>
            <div>
      {products.map((product) => (
        <div key={product.id}>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <span>R$ {product.price}</span>
        </div>
      ))}
    </div>
        
        </>
    )
}