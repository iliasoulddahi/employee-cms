/**
 * Error Handler
 */
module.exports = (err, req, res, next) => {
    let status;
    let message;
    console.log(err)
    switch (err.name) {
      case "SequelizeValidationError":
        status = 400
        message = err.errors[0].message
        break;
      case "SequelizeUniqueConstraintError":
        status = 400
        message = err.errors[0].message
        break;
      case "EmailOrPasswordIsRequired":
        status = 400
        message = "Email Or Password Is Required"
        break
      case "FoodNotFound":
        status = 404
        message = "Food not found"
        break
      case "NotFound":
        status = 404
        message = "Data not found"
        break
      case "InvalidCredentials":
        status = 400
        message = "Invalid email or password"
        break
      case "Unauthenticated":
      case "JsonWebTokenError":
        status = 401
        message = "Invalid Token"
        break
      case "Forbidden":
        status = 403
        message = "Forbidden"
        break
      default:
        status = 500
        message = "Internal Server Error"
        break
    }
  
    res.status(status).json({
      message: message
    })
  }