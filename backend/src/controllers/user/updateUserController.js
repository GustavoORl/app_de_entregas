import { updateUser } from "../../models/useModel.js";

export async function updateUserController(req, res){
    const id = req.body.id

    const user = req.body

    const result = await updateUser(user, id);

    res.json({
        message: "Usuário atualizado com sucesso!",
        user: result
    })
}