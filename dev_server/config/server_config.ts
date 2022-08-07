import type { Express } from "express"
import sesstion from 'express-session'
import expressCookie from 'cookie-parser'
import path from 'path'
import Redis from 'ioredis'
import { config } from 'dotenv'
import connectRedis from 'connect-redis'
import FileStore from 'session-file-store'
import {getRandomString, getOneHoure, serverFilePath, isProduction} from '../config/functions'




config()
const rootDirPath = `${__dirname}/../`
export default  (app:Express, express:any) =>{
    app.use(expressCookie())
    app.use(express.json())
    app.use(express.static(path.join(rootDirPath ,'public')))
    app.set('view engine', 'ejs')
    app.set('views', path.join(rootDirPath , 'views'));
    app.use(express.urlencoded({extended: false}))
    if(isProduction){
        const sesstionStore = FileStore(sesstion)
        app.use(sesstion({
            secret: process.env.SESTION_SECRIT!,
            resave: false,
            name: "YOFI_SESSTION",
            saveUninitialized: true,
            cookie: { 
                httpOnly: true,
                maxAge: 1000 * 60 * 60
            },
            store: new sesstionStore({
                reapInterval: 60 * 60,
                path: `./${serverFilePath}/sesstionstore`
            })
        }))
    } else {
        const RedisStore = connectRedis(sesstion)
        const RedisClint = new Redis()
        app.use(sesstion({
            secret: process.env.SESTION_SECRIT!,
            resave: false,
            name: "YOFI_SESSTION",
            saveUninitialized: true,
            cookie: { 
                httpOnly: true,
                maxAge: 1000 * 60 * 60
            },
            store: new RedisStore({
                client: RedisClint,
                disableTouch: true,
            })
        }))
    }

}