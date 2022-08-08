//libs
import express from 'express'
import server_config from './config/server_config'
const {sequelize} = require('./database/models')
import routeRoute from './routes/pages/route'
import indexRoute from './routes/pages'
import apiRoute from './routes/api'
import { isProduction, port } from './config/functions'


const app = express()
server_config(app, express)





app.use('/route', routeRoute)
app.use('/', indexRoute)
app.use('/api', apiRoute)

app.listen(port, async()=>{
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
throw Error('lala')