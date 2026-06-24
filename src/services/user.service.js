const User = require('../models/user.Model')
const ApiResponse = require('../utils/ApiResponse')
const bcrypt = require('bcrypt')
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

module.exports = { createNewUser }