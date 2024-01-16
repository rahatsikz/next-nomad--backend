import { Category, PrismaClient,  } from '@prisma/client'

const prisma = new PrismaClient()

const addCategorytoDB = async (data: Category): Promise<Category> => {
    const result = await prisma.category.create({
        data
    })
    return result
}

const getAllCategories = async () => {
      const result = await prisma.category.findMany({
        include: {
            service: true,
        },

      });
  
    
    return result;
  };
  
 

export const CategoryService = {
    addCategorytoDB,
    getAllCategories
}
