import tokenService from "../service/tokenService.js";

export const requiresAuth = () => {
    return (req, res, next) => {
        try {
            if(!req.headers.authorization) {
                throw new Error("Missing Authorization Header");
            }

            const authHeader = req.headers.authorization;
            const token = authHeader.split(" ")[1];
            tokenService.verifyToken(token);
            return next();
        } catch(error) {
            console.error("Auth error", error);
            return res.status(401).json({message:"Unauthorized"});
        }
    }
}

export default { requiresAuth };