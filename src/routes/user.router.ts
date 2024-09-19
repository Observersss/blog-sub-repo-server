import {Router} from "express";
import UserController from "../controller/UserController";

const userRouter = new Router();

userRouter.post('',UserController.create);
userRouter.get('',UserController.get);
userRouter.put('',UserController.update);
userRouter.put('',UserController.setRefreshToken);
userRouter.delete('',UserController.delete);

export default userRouter;