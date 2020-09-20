const userService = require("../services/user.service");
const authManager = require("./auth/auth-manager");
const ControllerAbstract = require("./controller-abstract");


class UserController extends ControllerAbstract {

    async create(req, res, next) {
        try {
            const { body } = req;
            let createdUser = await userService.create(body);
            await authManager.attachToken(res, createdUser.toJSON());
            return this.successResponse(res, createdUser);
        } catch (error) {
            this.failedResponse(res, error, 400);
        }
    }

}

module.exports = new UserController();