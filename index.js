const express = require('express')
const routes = require('./routes')
const cors = require('cors')
// const connectDB = require ('./db')

// connectDB()

const server = express()
server.use(cors())
const port = 5000;
server.use(express.json())
server.use('/api/v1',routes)


server.listen(port, ()=> console.log("Server is running on port 5000"))