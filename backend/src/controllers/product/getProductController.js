import { getProducts } from "../../models/useModel.js";

export async function getProductsController(req, res){
    const id = req.params.id

    const result = await getProducts(id);

    res.json({
        message: "Produtos listados com sucesso!",
        products: result
    })
}