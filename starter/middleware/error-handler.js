// const {CustomAPIError} = require('../errors');
// const{StatusCodes} = require('http-status-codes');

// const errorHandlerMiddleware = async(err,req,res,next)=>{
//     if(err instanceof CustomAPIError){
//         return res.status(err.statusCode).json({msg : err.message});
//     }
//     return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:"Something went wrong, please try again"});
// }

// module.exports = errorHandlerMiddleware;

const {CustomAPIError} = require('../errors');
const {StatusCodes}= require('http-status-codes'); // required
const errorHandlerMiddleware = (err, req, res, next) => {
    console.log("Error handler middleware triggered:", err);

    if (err instanceof CustomAPIError /*|| err.constructor === CustomAPIError*/) {
        return res.status(err.statusCode).json({ msg: err.message });
    }
    // 500 -> Internal Server Error
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({err});
};

module.exports = errorHandlerMiddleware;