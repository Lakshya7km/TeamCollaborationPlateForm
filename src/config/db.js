const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const dns = require('dns');

// Force Node.js to use Google's Public DNS servers
dns.setServers(['8.8.8.8', '8.8.4.4']);
const ConnectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('MongoDB connected successfully')
    }catch(err){
        console.log('mongodb connection failed',err.message)
        process.exit(1) // Exit the process with a failure code
    }
}

module.exports = ConnectDB;