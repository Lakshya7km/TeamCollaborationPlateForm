const ApiResponse = require('../utils/ApiResponse');
const health = (req, res) => {
    res.status(200).json(
        new ApiResponse(
            200,
            {
                uptime: process.uptime(),
            },
            "Server is Healthy and Running"
        )
    )
}

module.exports = health;