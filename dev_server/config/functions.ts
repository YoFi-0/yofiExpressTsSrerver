import { randomBytes } from 'crypto'
import { config } from 'dotenv'
config()

export const serverFilePath = process.env.PRODUCTION == 'true' ? 'web_server' : 'dev_server'
export const isProduction = process.env.PRODUCTION == 'true'  ? true : false

export const port:number = isNaN(Number(process.env.SERVRE_PORT)) ? 8080 : Number(process.env.SERVRE_PORT);
export const  getOneHoure = () =>{
    return 1000 * 60 * 60
}
export const  getOneDay = () =>{
    return 1000 * 60 * 60 * 24
}

export const getRandomString = (len:number) =>{
    return randomBytes(len).toString('hex');
}



    