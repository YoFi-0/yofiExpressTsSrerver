import { randomBytes } from 'crypto'
import fs from 'fs'
import { promisify } from 'node:util'
import { config } from 'dotenv'
config()

const readFile = promisify(fs.readFile)
export const serverFilePath = process.env.PRODUCTION == 'true' ? 'web_server' : 'dev_server'
export  const isProduction = __filename.endsWith('.js') ? true : false

export const port:number = isNaN(Number(process.env.SERVRE_PORT)) ? 8080 : Number(process.env.SERVRE_PORT);
export const  getOneHoure = () =>{
    return 1000 * 60 * 60
}

export const getRandomString = (len:number) =>{
    return randomBytes(len).toString('hex');
}



    