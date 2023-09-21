import express from "express";
import {dirname, join} from "path"
import { fileURLToPath} from "url";
import IndexRoutes from "./routes/Index.js"
const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))

app.set("views", join(__dirname, "views"))
app.set("view engine", "ejs")
app.use(IndexRoutes)

app.listen(3000)
console.log("server is listening on port", 3000)