const   DataModel=require('../model/Datamodel')
const jwt=require('jsonwebtoken')
const validator=require('validator')
 


/* Api for add data */
exports.AddData=async(req,res)=>{
    try{
        const {name,studentName,studentClass,mobile,email,location,description}=req.body

        if(!name||!studentName||!studentClass||!mobile||!email){
            return res.status(400).json('please fill all fields')
        }

        if(!validator.isEmail(email)){
            return res.status(401).json('please enter valid email address')
        }

        const newData= new DataModel({name,studentName,studentClass,mobile,email,location,description})
        await newData.save()
        res.status(200).json(newData)

        

    }
    catch(err){
        console.log(err);
        res.status(401).json(err)
        
    }

}



exports.getData=async(req,res)=>{
    try{
        const showData=await DataModel.find()
        res.status(200).json(showData)


    }
    catch(err){
        console.log(err);
        res.status(401).json(err)

        
    }
}




exports.AdminLogin=async(req,res)=>{
    try{
        const {email,password}=req.body

        if(process.env.AdminEmail==email&&process.env.AdminPassword==password){
            const token=jwt.sign(email+password,process.env.jwt_secret)
            res.status(200).json({token:token})

        }else{
            res.status(406).json('invalid credentials')
        }

        

    }
    catch(err){
        console.log(err);
        res.status(401).json(err)

        
    }
}



