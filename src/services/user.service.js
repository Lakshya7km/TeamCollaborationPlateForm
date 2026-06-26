const User = require('../models/user.Model')
const ApiResponse = require('../utils/ApiResponse')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const createNewUser = async (userData) => {

    const { name, username, password, email } = userData;

    //verify the data coming from request

    if (!name || !username || !password || !email) {
        throw new Error("Please provide all required fields: name, username, password, email")
    }

    //check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
        throw new Error(`User already Exist with email ${email}`)
    }


    //hashPassword

    const Password = await bcrypt.hash(password, 20);

    //create user

    const user = await User.create({
        name: name,
        username: username,
        hashedPassword: Password,
        email: email
    })

    return user;

}

const userLoginService = async (userData) => {

    const { email, password } = userData;




    //validate the user input
    if (!email && !password) {
        throw new Error('email and password are required')
    }


    //check user exist in the data base or not
    const userExists = await User.findOne({ email })

    if (!userExists) {
        throw new Error('User not found')
    }


    //generate the token
    const payload = {
        id: userExists._id,
        role: userExists.role

    }
    const token = await jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: "1hr" }

    )

    //after jwt generatation return the response
    return token;


}

module.exports = {
    createNewUser,
    userLoginService,

}