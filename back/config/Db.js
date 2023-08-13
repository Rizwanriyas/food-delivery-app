const mongoose = require("mongoose")
const mongoUrl = 'mongodb+srv://rizwansabah23:rizwandb@cluster0.7hkoscx.mongodb.net/?retryWrites=true&w=majority'
const connectDB= async()=>{
   await mongoose.connect(mongoUrl,{ useNewUrlParser: true},(err,result)=>{
    if(err) console.log("---",err) 
    else{
        console.log("connected succesfully");
 } });
}


module.exports = connectDB;