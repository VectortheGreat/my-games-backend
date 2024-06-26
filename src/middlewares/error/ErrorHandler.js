const CustomError = require("../../helpers/errors/CustomError");

function errorHandler(err, req, res, next) {
  if (!(err instanceof CustomError)) {
    err = new CustomError("Something went wrong", 500);
  }
  res.status(err.status || 500).json({
    message: err.message,
    status: err.status
  });
}

module.exports = errorHandler;
