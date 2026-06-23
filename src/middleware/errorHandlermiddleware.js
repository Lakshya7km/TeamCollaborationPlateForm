const errorHandler = (err,req,res,next)=>{


    const statusCode = err.statusCode|| 500
    const message=err.message|| "Internal Server Error"
    
    // receive the err object then using dot notation initilised them into another variable and use it in the response
    res.status(statusCode).json({
        success:false,
        statusCode:statusCode,
        message:message,


    })
}

module.exports = errorHandler;
