import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';

dotenv.config();

import demo_routes from "./routes/demo.routes";
import users from "./routes/users";

const app = express();
app.use(cors({
    origin: 'https://localhost:5173',
    credentials: true
}));

app.use(express.json());
app.use("/api/v1", users);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});