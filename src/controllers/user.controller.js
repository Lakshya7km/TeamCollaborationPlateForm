const ApiResponse = require('../utils/ApiResponse')

const { createNewUser, userLoginService } = require('../services/user.service')

const createUser = async (req, res) => {

    //1. extract data frpm req.body
    const userData = req.body;
    //2. pass data into service later and wait from promise
    const savedUser = await createNewUser(userData);


    res.status(201).json(new ApiResponse(
        201,
        {
            name: savedUser.name,
            username: savedUser.username,
            email: savedUser.email
        },
        "User  created Successfully"
    ))




}
const userLogin = async (req, res) => {

    //1. extract the login credential
    const userDate = req.body;


    //2.pass data into the service and wait for the response
    const token = await userLoginService(userDate);



    //3.return the res

    res.status(200).json(
        new ApiResponse(
            200,
            {
                token,
            },
            "Login successfull"
        )
    )




}


module.exports = {
    createUser,
    userLogin
}