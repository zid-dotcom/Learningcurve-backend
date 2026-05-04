const mongoose=require('mongoose')


const DataSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:Number

    },
    email:{
        type:String,
        required:true

    },
    location:{
        type:String,
        required:true

    },
    description:{
        type:String,
        required:true
    }
}, { timestamps: true })


const DataModel=mongoose.model('DataModel',DataSchema)
module.exports=DataModel
