const mongoose = require('mongoose');

mongoose.connect("mongodb://0.0.0.0:27017/dbRx")
.then((res)=>console.log("Db Rx connection established"))
.catch((err)=>console.log(err,"error in connection"))
