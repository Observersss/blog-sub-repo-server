import {Request, Response} from "express";
import {CustomUserInterface, CustomUserRequestInterface} from "../types/custom";
import bcrypt from "bcrypt";
import {pool} from "../config/db";
class UserService {
    async create(user:CustomUserRequestInterface){
        const find_query = `SELECT * FROM Users WHERE username = $1`;
        const find_values=[user.username];

        const existingUser:CustomUserInterface = (await pool.query(find_query,find_values)).rows[0];

        if(existingUser){
            throw new Error("User with this username already exist");
        }

        const hashedPassword = bcrypt.hash(user.password,3);

        const create_query = `INSERT INTO Users (username, email, password) VALUES ($1,$2,$3) RETURNING *`;
        const create_values = [user.username,user.email,hashedPassword];

        const newUser:CustomUserInterface = ((await pool.query(create_query, create_values)).rows[0]);

        if(newUser){
            throw new Error("Cannot find user with this id, something wasn't wrong");
        }

        return newUser;
    }
    async get(req:Request,res:Response){

    }
    async delete(req:Request,res:Response){

    }
    async update(req:Request,res:Response){}
    async setRefreshToken(req:Request,res:Response){}
}

export default new UserService();