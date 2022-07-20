const sql=require('mssql');

var express = require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
var app = express();
const context=require('aws-lambda');
const {routes:userRoutes}= require('./src/user/routes');
const {importRoutes:importRoutes}=require('./src/user/importRoute');

// const config = {
//     user: "admin",
//     password: "Durga12345",
//     server: "database-3.cxsg0qwb5pds.us-west-2.rds.amazonaws.com",
//     database: "mssql2",
//     pool: {
//         idleTimeoutMillis: 60000
//     },
//     requestTimeout: 60000,

//     options: {
//         trustedconnection: true,
//         enableArithAbort: true,
//         instancename: 'SQLEXPRESS',
//         encrypt: false // make false for local & make true for server database
//     },
//     port: 1433
// }


app.use(cors());
app.use(bodyParser.json());
app.use('/railcar',userRoutes);
app.use('/railcar/planner',importRoutes)

app.listen(3000,console.log('server is listening oin port 3000'));




// const dbConnection = new sql.ConnectionPool(config)
// dbConnection.connect().then(pool => {
//     console.log('Connected to MSSQL');
//     return pool
// })
// .catch(err => console.log('Database Connection Failed! Bad Config: ', err))

// async function invokeDB(){
//     const reponsee=await dbConnection.request().query('select * from users')
//     console.log("reponsee",reponsee);
// }



module.exports=app

