require('dotenv').config()

const mongoose = require("mongoose")

// const connectionStr = 'mongodb://127.0.0.1:27017/ecommercebackend'
const connectionStr = 'mongodb+srv://mark:mark@cluster0.ecmc4wf.mongodb.net/ecommerce'

mongoose.connect(connectionStr, {useNewUrlParser:true})
.then(() => console.log("connected to mongodb"))
.catch(err => console.log(err))

mongoose.connection.on('error', (err) => {
    console.log(err);
} )