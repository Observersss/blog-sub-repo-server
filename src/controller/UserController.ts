import {Request,Response} from "express";

class UserController {
    async create(req:Request,res:Response){
        try {

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