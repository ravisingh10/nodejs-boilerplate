const CustomError = require("../errors/custom-error.abstract");

class ControllerAbstract {
    successResponse(res, data) {
        return res.send(data);
    }

    failedResponse(res, error, code) {
        if (error instanceof CustomError) {
            code = error.code;
        }
        return res.status(code).send({ error: error.message });
    }
}

module.exports = ControllerAbstract;