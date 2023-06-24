const express  = require("express")
const dotenv = require("dotenv")
const router =  require("./routes/router")
const app =  express()
dotenv.config({path:"./config.env"})







app.use(express.json());
app.use('/api/v3/app', router);



module.exports = app;