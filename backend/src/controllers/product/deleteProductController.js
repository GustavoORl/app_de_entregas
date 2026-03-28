import { deleteProduct } from "../../models/useModel.js";

export async function deleteProductController(req, res){
    const id = req.params.id

    const result = await deleteProduct(id);

    res.json({
        message: "Produto deletado com sucesso!",
        product: result
    })
}