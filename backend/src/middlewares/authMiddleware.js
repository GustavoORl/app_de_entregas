import jwt from "jsonwebtoken";

export default function authMiddleware(req, res, next){
    
    const authHeader = req.headers.authorization;
    if (!authHeader) 
        return res.status(401).send("Acesso Negado!");

    const token = authHeader.split(" ")[1];

    try {
        const userVerified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.userId = userVerified.userId;
        req.userRole = userVerified.role;
        next();
    } catch (error) {
        res.status(401).send("Acesso Negado!");
    }
}