import express from "express"
const app = express()
import cors from "cors"
import { config } from "dotenv"

app.use(express.json())
app.use(cors())
config()
import "./config/config.js"
import { route } from "./router/routers.js"
app.use("/products", route)
app.listen(3005,()=>{
    console.log("Bu app 3001 portunda dinlenilir")
})


