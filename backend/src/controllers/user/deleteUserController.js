import { deleteUser } from "../../models/useModel.js";

export async function deleteUserController(req, res){
    const id = req.params.id

    const result = await deleteUser(id)

    res.json({
        message: "Usuário deletado com sucesso!",
        user: result
    })
}