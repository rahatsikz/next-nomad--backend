import express from "express";
import { ServiceController } from "./service.controller";
const router = express.Router();

router.post("/create-service", ServiceController.addServiceIntoDB);
router.get("/", ServiceController.getAllServices);
router.get("/:id", ServiceController.getSingleService);

export const ServiceRoutes = router;