import {Request,Response,NextFunction} from "express";
import jwt, {JwtPayload} from 'jsonwebtoken'

interface VerifyUserInterface extends JwtPayload{
    id:string;
    username:string;
}
export const AuthMiddleware = (req:Request,res:Response,next:NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token){
        throw res.status(401).json({message:"No token, auth denied"});
    }

    try{
        const decoded = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET) as VerifyUserInterface;
        req.user={id:decoded.id,username:decoded.username};

        next();
    }catch (e) {
        res.status(401).json(e)
    }
}