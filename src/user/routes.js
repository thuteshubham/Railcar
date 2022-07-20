const express=require('express');
const controller=require('./../controller/getAllTrains');

const routes=express.Router({
    mergeParams:true
})

routes.get('/',(req,res)=>{
    res.status(200).json({});
})

routes.post('/users',controller.getAllTrains);
routes.get('/activeInventory',controller.getActiveInventory);
routes.get('/getDormantInventory',controller.getDormantInventory)
routes.get('/getActiveLocoInfo',controller.getActiveLocoInfo)
routes.get('/userData',controller.getUsersData);
routes.post('/saveUser',controller.insertUserData);

module.exports={
    routes
}