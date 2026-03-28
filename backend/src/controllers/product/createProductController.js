import { createProduct } from "../../models/useModel.js";

export async function createProductController(req, res){
    
    const product = req.body

    const result = await createProduct(product);

    res.json({
        message: "Produto criado com sucesso!",
        product: result
    })
}