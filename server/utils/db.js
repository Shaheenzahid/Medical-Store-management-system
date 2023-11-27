const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/MedStoreManagementSystem"

async function getconnection(){
    await mongoose.connect(mongoURI).then(
        ()=>{
            console.log(`connected to DB `)
        }
    ).catch(
        (err)=>{
            console.log(err)

        }
    )
}
module.exports=getconnection;