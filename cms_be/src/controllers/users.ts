import { error } from "node:console";
import prisma from "../services/db";
import { Request, Response } from "express";
import  Jwt  from "jsonwebtoken";

const bcrypt = require('bcrypt');
const saltRound = 10;

export const userController = {
    SignUpUser: async (req: Request, res: Response) => {
        try {
            const data = req.body.data

            if (!data) {
                res.status(400).json({ status: 400, message: "All data is required to sign up" });
                return;
            }

            if (!data.name || data.name === '') {
                res.status(400).json({ status: 400, message: "Name is required to sign up!" });
                return;
            }

            if (!data.email || data.email === '') {
                res.status(400).json({ status: 400, message: "Email is required to sign up!" });
                return;
            }

            if (!data.password || data.password === '') {
                res.status(400).json({ status: 400, message: "password is required to sign up!" });
                return;
            }

            const existingEmail = await prisma.users.findFirst({ where: { user_email: data.email } });
            if (existingEmail) {
                res.status(409).json({ status: 409, message: "An account with this email already exists." });
                return;
            }

            const passwordHasCapital = /[A-Z]/.test(data.password);
            const passwordHasSpecial = /[@$!%*?&]/.test(data.password);

            if (!passwordHasCapital) {
                res.status(409).json({ status: 409, message: "Password must contain at least one capital letter." });
                return;
            }

            if (!passwordHasSpecial) {
                res.status(409).json({ status: 409, message: "Must contain at least one special symbol (@, $, !, %, *, ?, &) " });
                return;

            }

            const hashedPassword = await bcrypt.hash(data.password, saltRound);

            const newUser = await prisma.users.create({
                data: {
                    user_name: data.name,
                    user_email: data.email,
                    user_password_hashed: hashedPassword,
                    user_login_method: "MANUAL"
                }
            });

            if (newUser) {
                const token = Jwt.sign(
                    { userId: newUser.user_id },
                    process.env.JWT_SECRET as string,
                    { expiresIn: '7d' }
                );

                res.cookie('token', token, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production',
                    sameSite: 'lax',
                    maxAge: 7 * 24 * 60 * 60 * 1000,
                });

                res.status(200).json({ status: 200, message: "User created successfully" });
                return;
            }

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error. Please try again later!" });
        }

    },
    LoginUser: async (req: Request, res: Response) => {
        try {
            const data = req.body.data

            if (!data) {
                res.status(400).json({ status: 400, message: "All data is required to sign up" });
                return;
            }

            if (!data.email || data.email === '') {
                res.status(400).json({ status: 400, message: "Email is required to sign up!" });
                return;
            }

            if (!data.password || data.password === '') {
                res.status(400).json({ status: 400, message: "password is required to sign up!" });
                return;
            }
            const user = await prisma.users.findFirst({
                where: { user_email: data.email }
            });

            if (!user) {
                res.status(400).json({ status: 400, message: `Invalid password or email` });
                return;
            }


            const isPasswordMatched = await bcrypt.compare(data.password, user.user_password_hashed);

            if (!isPasswordMatched) {
                res.status(400).json({ status: 400, message: `Invalid password or email` });
                return;
            }

            res.status(200).json({ status: 200, message: "You have successfully login!" });
            return;

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error" });
        }
    },
}