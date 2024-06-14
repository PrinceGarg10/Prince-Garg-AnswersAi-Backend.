/**
 * Handles error by printing to console in development env and builds and sends an error response
 * @param {Object} res - response object
 * @param {Object} err - error object
 */
const handleError = (res = {}, err = {}) => {
    // Prints error in console
    if (process.env.NODE_ENV === 'development') {
      console.log(err)
    }
    // Determine HTTP status code
    let statusCode;
    if (err.code === 'ECONNREFUSED' || err.sqlMessage) {
        statusCode = 503; // Service Unavailable
        err.sqlMessage = err.sqlMessage || "Database Connection Issue"
    } else {
        statusCode = err.code || 500; // Default to 500 if code property is not present
    }
    // Sends error to user
    res.status(statusCode).json({
      errors: {
        msg: err.sqlMessage || err.message || "Internal Server Error"
      }
    })
}

module.exports = { handleError }
