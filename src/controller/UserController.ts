import {Request,Response} from "express";
import {CustomUserRequestInterface} from "../types/custom";
import UserService from "../service/UserService";

class UserController {
    async create(req:Request<{},{},CustomUserRequestInterface>,res:Response){
        try {
            const user = req.body;
            const newUser = await UserService.create(user);

            res.status(200).json({user: {
                    userId: newUser.id,
                    username: newUser.username,
                    email: newUser.email,
                    isActivated: newUser.is_activated,
                }});
        }catch (e) {
            res.status(500).json({name:e.name,message:e.message});
        }
    }
    async get(req:Request,res:Response){
        try {

        }catch (e) {
            res.status(500).json({name:e.name,message:e.message});
        }
    }
    async delete(req:Request,res:Response){
        try {

        }catch (e) {
            res.status(500).json({name:e.name,message:e.message});
        }
    }
    async update(req:Request,res:Response){
        try {

        }catch (e) {
            res.status(500).json({name:e.name,message:e.message});
        }
    }
    async setRefreshToken(req:Request,res:Response){
        try {

        }catch (e) {
            res.status(500).json({name:e.name,message:e.message});
        }
    }
}

export default new UserController();