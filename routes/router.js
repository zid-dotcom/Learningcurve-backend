const Datacontroller=require('../controller/Datacontroller')
const jwtmiddleware=require('../middleware/jwtmiddleware')

const express=require('express')
const router=express.Router()


router.post('/adminlogin',Datacontroller.AdminLogin)
router.post('/add',Datacontroller.AddData)
router.get('/get',jwtmiddleware,Datacontroller.getData)





module.exports=router