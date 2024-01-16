import { Request, Response } from "express";
import { CategoryService } from "./category.service";

const addCategoryIntoDB = async (req: Request, res: Response) => {
    try {
      const result = await CategoryService.addCategorytoDB(req.body);
      res.send({
        success: true,
        message: "Category Created Successfully",
        data: result,
      });
    } catch (error) {
      res.send(error);
    }
};

const getAllCategories = async (req: Request, res: Response) => {
    try {
      const result = await CategoryService.getAllCategories();
      res.send({
        success: true,
        message: "Data fetched Successfully",
        data: result,
      });
    } catch (error) {
      res.send(error);
    }
  };


export const CategoryController = {
    addCategoryIntoDB,
    getAllCategories
}