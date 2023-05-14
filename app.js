const express = require("express")
const cors = require("cors")
const routes = require("./routes/route")
const connectDB = require("./databases/connect.db")
const bodyParser = require("body-parser")
const app = express()

app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
connectDB()
app.use("/", routes)
app.listen(8080,()=>{
    console.log("Listening");
})