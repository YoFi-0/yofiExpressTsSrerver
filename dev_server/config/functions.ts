import { randomBytes } from 'crypto'
import fs from 'fs'
import { promisify } from 'node:util'

const readFile = promisify(fs.readFile)
export const serverFilePath = process.env.PRODUCTION == 'true' ? 'web_server' : 'dev_server'
export  const isProduction = process.env.PRODUCTION == 'true' ? true : false


export const  getOneHoure = () =>{
    return 1000 * 60 * 60
}

export const getRandomString = (len:number) =>{
    return randomBytes(len).toString('hex');
}

    