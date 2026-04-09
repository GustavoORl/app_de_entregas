import { createProduct, getProducts, getProduct, updateProduct, deleteProduct } from "../models/useModel.js";

const productController = {
    async create(req, res){
        const product = req.body

        const result = await createProduct(product);

        res.json({
            message: "Produto criado com sucesso!",
            product: result
        });
    },

    async getAll(req, res){

        const result = await getProducts();

        res.json({
            message: "Produtos listados com sucesso!",
            products: result
        });
    }, 

    async getById(req, res){
        const id = req.params.id

        const result = await getProduct(+id);

        res.json({
            message: "Produto listado com sucesso!",
            product: result
        });
    },

    async update(req, res){
        const id = req.params.id

        const product = req.body

        const result = await updateProduct(pruduct, +id);

        res.json({
            message: "Produto atualizado com sucesso!",
            product: result
        })
    },

    async delete(req, res){
        const id = req.params.id

        const result = await deleteProduct(+id);

        res.json({
            message: "Produto deleteado com sucesso!",
            product: result
        });
    }
}

export default productController;