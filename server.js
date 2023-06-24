const app = require("./app")
const database = require("./mongo")
database()

app.listen(process.env.PORT,()=>{
    console.log(`server is running on https://localhost:${process.env.PORT}`)
})