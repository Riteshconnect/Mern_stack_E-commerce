const ErrorHandler = require("../utils/errorHandler");


module.exports = (err,req,res,next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";


    // Wrong MongoDB ID Error
if(err.name === "CastError"){
    const message = `Resource Not Found. Invalid: ${err.path}`;
    err = new ErrorHandler(message, 400);
}
    
    
    
    res.status(err.statusCode).json({
        status: false,
        message: err.message,
    });
};


