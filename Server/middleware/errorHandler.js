const { constants } = require("../constants")

const errorHandler = (err, req, res, next) => {
    console.log("error handler is called.");
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title: "Validation Error",
                message: err.message,
                stackTrack: err.stack
            });
            break;

        case constants.NOT_FOUND:
            res.json({
                title: "Not Found",
                message: err.message,
                stackTrack: err.stack
            });
            break;

        case constants.FORBIDDEN:
            res.json({
                title: "Forbiddent",
                message: err.message,
                stackTrack: err.stack
            });
            break;

        case constants.UNAUTHORIZED:
            res.json({
                title: "Un Authorize",
                message: err.message,
                stackTrack: err.stack
            });
            break;

        case constants.SERVER_ERROR:
            res.json({
                title: "Server Error",
                message: err.message,
                stackTrack: err.stack
            });
            break;


        default:
            console.log("All is Well.");
            break;
    }
}

module.exports = errorHandler;