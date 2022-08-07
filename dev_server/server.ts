//libs
import express from 'express'
import server_config from './config/server_config'
const {sequelize} = require('./database/models')
import routeRoute from './routes/route'
import indexRoute from './routes'
import { isProduction, port } from './config/functions'




const app = express()
declare module 'express-session' {
    interface SessionData {
        isLogin: boolean,
        hero:boolean
    }
}


server_config(app, express)
app.use('/route', routeRoute)
app.use('/', indexRoute)


app.listen(port, ()=>{
    console.log(`production Mode ${isProduction ? 'on' : 'off'}`)
    console.log(`yofi server start on port => ${port}`)
    sequelize.sync(
        {
            logging: console.log,
        }
    ).then((res:any) =>{
        console.log('DB_conection: database connected')
    }).catch((err:any) => {
        console.log(`'DB_conection: ${err}`)
        console.log('DB_conection: connection database erorr')
    })
})