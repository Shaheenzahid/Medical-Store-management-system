const express=require("express");
const mongoose =require("mongoose");
const bodyParser=require("body-parser");
const cors=require("cors");
const dotenv=require("dotenv");
const app = express();
require("dotenv").config();
const connectToMongo = require("./db");


const PORT=process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Importing route modules
const supplierRouter = require("./routes/suppliers.js");
const RegsupplierRouter = require("./routes/suppliers.js");
const suppliersRoute = require('./routes/suppliers.js');
const loginRoute = require('./routes/loginRoute.js');
const viewRegSupplierRoute = require('./routes/suppliers.js');
const addNewProducts = require('./routes/productsRoute.js');
const AddOrders = require('./routes/ordersRoute.js');
const reportRoutes = require('./routes/reportRoutes');
const declineReason = require('./routes/declineRoute');


// Setting up routes
app.use('/supplier', loginRoute);
app.use("/supplier",supplierRouter);
app.use("/supplier",RegsupplierRouter);
app.use("/supplier", suppliersRoute);
app.use("/supplier", viewRegSupplierRoute);
app.use("/product", addNewProducts);
app.use("/orders",AddOrders)
app.use("/report", reportRoutes);
app.use("/decline", declineReason);


connectToMongo();

app.listen(PORT,()=>{
    console.log('Server is up and runing on port number:  ',PORT)
})



