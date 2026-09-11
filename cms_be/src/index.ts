import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.json({ message: "Hello there" , status: "success", httpStatus: 200});
});

app.get("/health", (req, res) => {
    res.json({ message: "server is running" , status: "success", httpStatus: 200});
});


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});