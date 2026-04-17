import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "../helpers/dbConnection.js";

const authController = {
    // REGISTRO
    async register(req, res){
        try{
            const { name, email, lastname, password } = req.body;

        // VALIDAÇÃO
        if (!name || !email || !password || !lastname){
            return res.status(400).json({error: "Campos obrigatórios!"});
        }

        //VERIFICA SE USUÁRIO JÁ EXISTE
        const userExists = await prisma.user.findUnique({
            where: { email },
        });

        if(userExists){
            return res.status(400).json({error: "Email já cadastrado!"});
        }

        //CRIPTOGRAFAR SENHA
        const hashedPassword = await bcrypt.hash(password, 10);

        //CRIAR USUÁRIO
        const user = await prisma.user.create({
            data: {
                name,
                lastname, 
                email,
                password: hashedPassword,
            },
        });

        //GERAR TOKEN
            const token = jwt.sign(
            { userId: user.id, role: user.role},
            process.env.TOKEN_SECRET,
            { expiresIn: "1d" }
            );

        return res.status(201).json({
            message: "Usuário criado com sucesso!",
            token,
        user: {
            id: user.id,
            name: user.name,
            lastname: user.lastname,
            email: user.email,
        },
        });
        } catch (error){
            return res.status(500).json({error: "erro ao registrar usuário!"});
        }
    }, 

    //LOGIN
    async login(req, res){
        try{
            const {email, password} = req.body;

            //VALIDAÇÃO
            if (!email || !password){
                return res.status(400).json({error: "Campos obrigatórios!"});
            }

            //BUSCAR USUÁRIOS
            const user = await prisma.user.findUnique({
                where: { email },
            });

            if (!user){
                return res.status(400).json({error: "Credenciais inválidas!"});
            }

            //COMPARAR SENHAS
            const isValid = await bcrypt.compare(password, user.password);

            if(!isValid){
                return res.status(400).json({error: "Credenciais inválidas!"});
            }

            //GERAR TOKEN
            const token = jwt.sign(
            { userId: user.id, role: user.role},
            process.env.TOKEN_SECRET,
            { expiresIn: "1h" }
            );

            return res.json({
                message: "Login realizado com sucesso!",
                token, 
                user: {
                    id: user.id,
                    name: user.name,
                    lastname: user.lastname,
                    email: user.email,
                    role: user.role,
                },
            });

        } catch (error) {
            return res.status(500).json({error: "Erro no Login!"});
        }
    }, 

    //ME
    async me(req, res){
        try{
            const user = await prisma.user.findUnique({
                where: { id: req.userId},
                select: {
                    id: true,
                    name: true,
                    lastname: true,
                    email: true,
                    role: true,
                },
            });

        return res.json(user);
        } catch (error) {
            return res.status(500).json({error: "Erro ao buscar usuário!"})
        }
    }, 
};

export default authController;