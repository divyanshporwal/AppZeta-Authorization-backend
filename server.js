const app = require('./src/app')
const connectDb = require('./src/db/db')
require('dotenv').config()

connectDb();

app.listen(3000,(req,res)=>{
    console.log(`server started at 3000`);
})