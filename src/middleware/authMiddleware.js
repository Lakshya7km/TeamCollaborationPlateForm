const jwt = require('jsonwebtoken');
const ApiResponse = require('../utils/ApiResponse')
const authMiddleware = (req, res, next) => {
    const header = req.header['authorization']; //headers array

    const token = header.split(' ')[1];

    if (!token) {
        return res.status(401).json(new ApiResponse(
            400,
            null,
            "Unauthorised access"
        ))
    }

    const decoded = await jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
    next()




}
module.exports = authMiddleware;
