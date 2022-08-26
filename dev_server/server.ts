//libs
import express from 'express'
import server_config from './config/server_config'
import routeRoute from './routes/pages/route'
import indexRoute from './routes/pages'
import apiRoute from './routes/APIs/api'
import { isProduction, port } from './config/functions'


const app = express()
server_config(app, express)





app.use('/route', routeRoute)
app.use('/', indexRoute)
app.use('/api', apiRoute)

app.listen(port, async()=>{
    console.log(`production Mode ${isProduction ? 'on' : 'off'}`)
    console.log(`yofi server start on port => ${port}`)
})