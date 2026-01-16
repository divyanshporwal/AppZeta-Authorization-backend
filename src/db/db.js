const mongoose = require('mongoose')

function connectDb(){
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log('Mongodb connected')
    })
    .catch(err=>{
        console.log('Mongoose connection error', err)
    })
}

module.exports = connectDb