const { BaseError } = require("sequelize");
const CustomError = require("../errors/custom-error.abstract");

class ControllerAbstract {
    successResponse(res, data) {
        return res.send(data);
    }

    failedResponse(res, error, code) {
        let errorMessage = error.message;
        if (error instanceof CustomError) {
            code = error.code;
        }
        // if(error instanceof BaseError ) {
        //     errorMessage = error.toString();
        // }
        // console.error(error.message)
        return res.status(code).send({ error: errorMessage });
    }
} BaseError

module.exports = ControllerAbstract;