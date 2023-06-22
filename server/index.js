require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const connection = require('./database')
const userRoutes = require("./routes/users")
const authRoutes = require("./routes/auth")
const Message = require("./routes/messages")
connection()


//middleware
app.use(express.json())
app.use(cors())
app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/messages", Message)

const port = process.env.PORT || 8080

app.listen(port, () => console.log(`Nasluchiwanie na porcie ${port}`))

