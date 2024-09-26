import {Router} from "express";
import UserController from "../controller/UserController";
import {AuthMiddleware} from "../midellware/AuthMiddleware";

const userRouter = new Router();

userRouter.post('',UserController.create);
userRouter.get('',AuthMiddleware,UserController.get);
userRouter.put('',AuthMiddleware,UserController.update);
userRouter.put('',AuthMiddleware,UserController.setRefreshToken);
userRouter.delete('',AuthMiddleware,UserController.delete);

export default userRouter;