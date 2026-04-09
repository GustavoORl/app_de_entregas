import { getUsers, getUser, deleteUser, updateUser } from "../models/useModel.js";


const userController = {

async getAll(req, res){

    const result = await getUsers();

    res.json({
        message: "Usuários listados com sucesso!",
        user: result
    });
},

async getById(req, res){
    const id = req.params.id

    const result = await getUser(+id);

    res.json({
        message: "Usuário listado com sucesso!",
        user: result
    });
},

async update(req, res){
    const id = req.params.id

    const user = req.body

    const result = await updateUser(user, +id);

    res.json({
        message: "Usuário atualizado com sucesso!",
        user: result
    });
},
async delete(req, res){
    const id = req.params.id

    const result = await deleteUser(+id);

    res.json({
        message: "Usuário deletado com sucesso!",
        user: result
    });
},
};

export default userController;