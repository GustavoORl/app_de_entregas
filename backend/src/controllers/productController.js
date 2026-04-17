import { prisma } from "../helpers/dbConnection.js";

const productController = {
    async create(req, res) {
        try {
            const { name, description, price, quantity } = req.body;

            const image = req.file ? req.file.filename : null;

            const product = await prisma.product.create({
                data: {
                    name,
                    description,
                    price: Number(price),
                    quantity: Number(quantity),
                    image,
                },
            });
            res.status(201).json(product);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Erro ao criar produto!" });
        }
    },

    async update(req, res) {

        try {
            const { id } = req.params;
            const { name, price, quantity } = req.body;
            const image = req.file ? req.file.filename : undefined;

            const product = await prisma.product.update({
                where: { id },
                data: {
                    name,
                    price: price ? Number(price) : undefined,
                    quantity: quantity ? Number(quantity) : undefined,
                    ...(image && { image }),
                },
            });

            res.json(product);

        } catch (error) {
            res.status(500).json({ error: "Erro ao atualizar produto" });
        }
    },

    // async getById(req, res) {
    //     const id = req.params.id

    //     const result = await getProduct(+id);

    //     res.json({
    //         message: "Produto listado com sucesso!",
    //         product: result
    //     });
    // },

    async delete(req, res) {
        try{
            const {id} = req.params;

            const product = await prisma.product.delete({
                where: {id},
            });

            res.json({message: "Produto deletado com sucesso!", product});
        } catch (error){
            res.status(500).json({error: "Erro ao deletar produto!"});
        }
    }
}

export default productController;