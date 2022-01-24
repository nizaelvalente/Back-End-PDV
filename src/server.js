require('./schemas/product.schema')
require('./schemas/sales.Schema')
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const server = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATA_BASE, {
                 
    useNewUrlParser: true,
    useUnifiedTopology: true
})

server.use(express.json())
server.use(cors())
server.use('/', require('./routers/index.router'))

server.listen(3100, ()=> {
    console.log('Rodando na porta 3100')
})


