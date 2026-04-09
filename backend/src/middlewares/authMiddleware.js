import jwt from "jsonwebtoken";

export default function authMiddleware(req, res, next){
    
    const token = req.header('authorization-token');
    if (!token) 
        return res.status(401).send("Acesso Negado!");

    try {
        const userVeriffied = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = userVeriffied;
        next();
    } catch (error) {
        res.status(401).send("Acesso Negado!");
    }
}