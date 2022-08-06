//libs
import express from 'express'
import sestion from 'express-session'
import expressCookie from 'cookie-parser'
import { config } from 'dotenv'
import path from 'path'
import Redis from 'ioredis'
import connectRedis from 'connect-redis'
declare module 'express-session' {
  interface SessionData {
    isLogin: boolean;
  }
}

//my files
import {getRandomString, getOneHoure, serverFilePath, isProduction} from './config/functions'
import routeRoute from './routes/route'
import {resultConsoleConnection} from './database/connection'
import FileStore from 'session-file-store'

//run Functions
const port:number = isNaN(Number(process.env.SERVRE_PORT)) ? 8080 : Number(process.env.SERVRE_PORT);
const app = express()



resultConsoleConnection
config()


//express config
app.use(expressCookie())
app.use(express.static(path.join(__dirname ,'public')))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname , '/views'));
app.use(express.urlencoded({extended: false}))
if(isProduction){
    const sesstionStore = FileStore(sestion)
    app.use(sestion({
        secret: process.env.SESTION_SECRIT!,
        resave: false,
        name: "laravel_session",
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
    const RedisStore = connectRedis(sestion)
    const RedisClint = new Redis()
    app.use(sestion({
        secret: process.env.SESTION_SECRIT!,
        resave: false,
        name: "dwhgwdhowiuhdiu",
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





//routes
app.use('/route', routeRoute)
app.get('/', (req, res) =>{
    res.render('index')
})




app.listen(port, ()=>{
    console.log(`yofi server start on port => ${port}`)
})