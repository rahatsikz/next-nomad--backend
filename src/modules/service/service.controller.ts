import { Request, Response } from "express";
import { ServiceService } from "./service.service";

const addServiceIntoDB = async (req: Request, res: Response) => {
    try {
      const result = await ServiceService.addServicetoDB(req.body);
      res.send({
        success: true,
        message: "Service Created Successfully",
        data: result,
      });
    } catch (error) {
      res.send(error);
    }
  };

  const getAllServices = async (req: Request, res: Response) => {
    try {
      const result = await ServiceService.getAllServices();
      res.send({
        success: true,
        message: "Data fetched Successfully",
        data: result,
      });
    } catch (error) {
      res.send(error);
    }
  };
  
  const getSingleService = async (req: Request, res: Response) => {
    try {
      const result = await ServiceService.getSingleService(parseInt(req.params.id));
      res.send({
        success: true,
        message: "Single Service Data fetched Successfully",
        data: result,
      });
    } catch (error) {
      res.send(error);
    }
  };

  export const ServiceController = {
    addServiceIntoDB,
    getAllServices,
    getSingleService
  }