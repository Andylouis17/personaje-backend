import { Request, Response, Router } from "express";


const defaultRoutes = Router();
defaultRoutes.get('/',(req:Request,res:Response)=>{
    return res.json({
        ok:true,
        msj:'Todos funciona correctamente'
    })
})

export default defaultRoutes;