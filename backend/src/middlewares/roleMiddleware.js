export default function roleMiddleware(...allowedRoles){
    return (req, res, next) => {
        const userRole = req.userRole;

        if(!allowedRoles.includes(userRole)){
            return res.status(403).json({error: "Acesso Negado!"});
        }

        next();
    }
}