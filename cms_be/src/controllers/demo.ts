import prisma from "../services/db";
import {Request, Response} from "express";

export const demoController = {
    // getDemoData: async (req: Request, res: Response) => {
    //     try {
    //         const data = await prisma.demo.findMany();
    //         res.json({data: data, status: 200});
    //     } catch (error) {
    //         res.status(500).json({ message: "Internal server error" , error: error});
    //     }
    // },
    // updateDemoData: async (req: Request, res: Response) => {
    //     try{
    //         const data = req.body.data
            
    //         if(!data){
    //             res.status(400).json({status: 400, message: "data is required to update"});
    //             return;
    //         }
          
    //         const {message, user_name} = data;
    //         const id = req.body.id;
    
    //         if(!id){
    //             res.status(400).json({status: 400, message: "id is required"});
    //             return;
    //         }

    //         const updatedData = await prisma.demo.update({
    //             where: {id: id},
    //             data: {message, user_name}
    //         });
    
    //         res.status(200).json({status: 200, message: "data has been updated successfully", data: updatedData});
    //     }catch(error){
    //         console.error(error);
    //         res.status(500).json({message: "Internal server error"});
    //     }
    // }
}