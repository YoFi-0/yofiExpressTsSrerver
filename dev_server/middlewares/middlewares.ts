import type {Request, Response, NextFunction} from 'express'

export const isLogin  = (req:Request, res:Response, next:NextFunction) =>{
    if(req.session.isLogin){
        next()
    } else {
        res.status(500)
    }
}