import { Router } from "express";
import { userController } from "../controllers/users";
import { requireAuth } from "../middleware/auth";

const users = Router();

users.post("/user-signup", userController.SignUpUser);

users.post("/user-login", userController.LoginUser);

users.get("/user-verify", requireAuth, userController.AuthenticateStatus);

users.post("/user-logout", requireAuth, userController.LogOut);
export default users;