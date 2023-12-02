const mongoose=require("mongoose")
const express = require("express");
const connectToMongo = require("./utils/db");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());





app.use('/api/User' , require('./routers/User'));

connectToMongo();

app.listen(3001, () =>{
    console.log("server is running")
})
