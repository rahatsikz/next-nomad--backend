import { PrismaClient, Service } from '@prisma/client'

const prisma = new PrismaClient()

const addServicetoDB = async (data: Service): Promise<Service> => {
    const result = await prisma.service.create({
        data
    })
    return result
}


const getAllServices = async () => {
      const result = await prisma.service.findMany({
        include: {
          review: true,
      },
      });
  
    // const result = await prisma.$queryRaw`
    // SELECT * FROM "users"
    // JOIN "profiles" ON "users"."id" = "profiles"."userId";
    // `;
    return result;
  };
  
 //  select: {
      //   email: true,
      //   name: true,
      // },
    //   include: {
    //     profile: true,
    //   },

const getSingleService = async (id: number) => {
    const result = await prisma.service.findUnique({
      where: {
        id: id,
      },
      
    });
    return result;
  };

export const ServiceService = {
    addServicetoDB,
    getAllServices,
    getSingleService
}

