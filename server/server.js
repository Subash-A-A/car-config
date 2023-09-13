const express = require('express')
const app = express();
const mongoose = require('mongoose')
const dotenv=require('dotenv')
const cors= require('cors')
const routeUrls=require('./routes/router')


dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS)

app.use(express.json())
app.use(cors())

app.use('/app',routeUrls)
app.listen(4000,()=>console.log("server is running"));