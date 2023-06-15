const mongoose = require('mongoose');

const url = "mongodb+srv://diamondvalifeanyi001:lGeP0b24Z5WnYWDD@cluster0.ctr5lvp.mongodb.net/hospitalDB"

mongoose.connect(url).then(()=>{
    console.log("connected to the database")
}).catch((error)=>{
 error.message
})