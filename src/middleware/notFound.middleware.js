

const notFoundMiddleware = (req, res, next) => {
    const error = new Error(`Can't find ${req.originalUrl} on this server!`)// we are creating a custome console.error();

    error.statusCode = 404
    next(error)//trigger the global error handler function

}

module.exports = notFoundMiddleware;