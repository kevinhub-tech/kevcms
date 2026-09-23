import { Router } from "express";
import { demoController } from "../controllers/demo";

const demo_routes = Router();

// demo_routes.get("/demo-api", demoController.getDemoData);
// demo_routes.patch("/update-demo", demoController.updateDemoData);

export default demo_routes;