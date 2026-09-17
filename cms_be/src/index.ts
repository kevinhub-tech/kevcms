import express from "express";
import cors from "cors";
import dotenv from "dotenv";


dotenv.config();

import demo_routes from "./routes/demo.routes";


const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/v1", demo_routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});