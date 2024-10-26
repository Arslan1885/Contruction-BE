import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'
import dbcon from './Database/dbcon.js';
import allRoute from './Routes/allRoutes.js'


dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
app.use(allRoute)

const port = process.env.PORT || 300

app.listen(port, () => {
    dbcon();
    console.log(`Server is runing on ${port}`)

})
