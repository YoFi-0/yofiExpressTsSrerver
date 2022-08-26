//libs
import express from 'express'
import server_config from './config/server_config'
import routeRoute from './routes/pages/route'
import indexRoute from './routes/pages'
import apiRoute from './routes/APIs/api'
import { isProduction, port } from './config/functions'
const app = express()
import http from 'http'
const server =  http.createServer(app)
import {Server} from "socket.io"
const io = new Server(server);
import { Connection } from './database/connection'
server_config(app, express)



declare module 'express-session' {
    interface SessionData {
        isLogin: boolean,
        hero:boolean
    }
}

app.use('/route', routeRoute)
app.use('/', indexRoute)
app.use('/api', apiRoute)


server.listen(port, async()=>{
    try{
        await Connection.sync({
            logging: console.log,
            force: false
        })
        console.log('database connected')
    } catch(err) {
        console.log('database Error')
        console.log(err)
    }
    
    console.log(`production Mode ${isProduction ? 'on' : 'off'}`)
    console.log(`yofi server start on port => ${port}`)
})

io.on('connection', (socket) => {
    console.log('a user connected');
});