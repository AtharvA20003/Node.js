//Custom Error
class CustomError extends Error {
    constructor(messge){
        super(messge);
    }
} 
module.exports = {CustomError}