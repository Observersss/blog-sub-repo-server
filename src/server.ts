import express from "express";
import dotenv from "dotenv"
import {pool} from "./config/db";

dotenv.config();


const app = express();
const PORT = process.env.PORT || 8012;
const BASE_URL = '/api';

app.use(express.json());

async function startApp(){
    pool.query(`SELECT NOW()`,(err) => {
        if(err) {
            console.error('Error connecting to the database', err.stack);
        } else {
            console.log('Connected to the database');
        }
    });

    app.listen(PORT,() => {
        console.log(`Server has been started on port: ${PORT}`);
    });
}

startApp();