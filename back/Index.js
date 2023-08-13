const express = require("express")
const app = express()
const port =5000
const connectDB = require('./config/Db')
const cors = require('cors')
connectDB();

app.get('/', (req,res)=>{
    res.send('hello')
})
app.use(cors()) 
app.use(express.json())

app.use('/api', require("./config/Userrouter"))
app.listen(port, () => {
    console.log(`app listening port ${port}`);
})