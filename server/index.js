const mongoose=require('mongoose');
const port = 3005;
const express = require('express');
const connectToMongo = require('./utils/db');
const bodyparser = require('body-parser'); 
const cors = require('cors');
const routes = require('./routers/userroute');
const app = express();
app.use(cors());


app.use(bodyparser.json());
app.use('/api' , routes);

connectToMongo();

app.listen(port, () =>{
    console.log("server is running")
})
