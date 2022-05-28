import mongoose from 'mongoose';

const acd=()=>{
 mongoose.connect('mongodb://localhost:27017/create_database');

try{
    console.log("Win")
}
catch(e){
    console.log("loi me r")
}
}

module.exports =acd;