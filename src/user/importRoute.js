const express = require('express');
const importRoutes =express.Router({
    mergeParams:true
})

const { Api_Endpoints } = require('../appConstants/routeConstants');
const importRouteController = require('../controller/importRouteController')

importRoutes.get('/getImportRoute', importRouteController.getImportRoute);
importRoutes.get('/getRouteInfo',importRouteController.getRouteInfo);
importRoutes.get('/getAvailableInventory', importRouteController.getAvailableInventories);
importRoutes.post('/postCreateLocoCarRoute', importRouteController.postCreateLocoCarRoute);
module.exports ={
    importRoutes
} 