import { Router } from "express";
import { userController } from "../controllers/users";

const users = Router();

users.post("/user-signup", userController.SignUpUser);

users.post("/user-login", userController.LoginUser);

export default users;