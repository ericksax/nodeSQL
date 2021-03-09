const router = require("./routes")
const express = require("express")

require("./database")

const app = express()

const PORT = 3000

app.use(express.json(), router)

app.listen(PORT,()=> {
    console.log("server is running")
})