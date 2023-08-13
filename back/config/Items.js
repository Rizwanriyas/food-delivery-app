const mongoose = require("mongoose")

const testSchema = mongoose.Schema({
    name:{type:String},
    image:{type:String},
    Description:{type:String},
    category:{type:String},
 
} )

const client = mongoose.model("client",testSchema)

module.exports = client
