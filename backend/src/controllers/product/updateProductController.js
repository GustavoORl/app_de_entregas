import { updateProduct } from "../../models/useModel.js";

export async function updateProductController(req, res){
    const id = req.params.id

    const product = req.body

    const result = await updateProduct(product, id);

    res.json({
        message: "Produto atualizado com sucesso!",
        product: result
    })
}