const ApiResponse = require('../utils/ApiResponse')

const {createNewUser} = require('../services/user.service')

const createUser = async(req,res)=>{
 
    //1. extract data frpm req.body
    const userData= req.body;
    //2. pass data into service later and wait from promise
    const savedUser = await createNewUser(userData);
    

    res.status(201).json( new ApiResponse(
            201,
            {
               name: savedUser.name,
               username: savedUser.username,
               email: savedUser.email
            },
            "User  created Successfully"
        ))




}

module.exports ={
    createUser
}