
const express = require('express')
const routes = require ('./routes')
const cors = require ('cors')
const connectDB = require ('./db');

const server = express()
server.use(cors())
server.use(express.json())
const port = 5000

connectDB()

server.use('/api/v1', routes)

server.listen(port, ()=> console.log(`'server is running on port ${5000}...'`))
