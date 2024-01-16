import express, { Application } from "express";
import cors from "cors";
import { ServiceRoutes } from "./modules/service/service.route";
import { CategoryRoutes } from "./modules/category/category.route";

const app: Application = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/service", ServiceRoutes);
app.use("/api/v1/category", CategoryRoutes);


export default app;
