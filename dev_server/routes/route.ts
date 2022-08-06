import { Router } from 'express'
import {isLogin} from '../middlewares/middlewares'
const route = Router()

route.use(isLogin)

route.get('/', (req, res) => {
    res.render('admin')
})

export default route