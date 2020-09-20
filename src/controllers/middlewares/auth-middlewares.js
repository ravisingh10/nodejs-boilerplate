const authManager = require("../auth/auth-manager");

const sessionMiddleware = async (req, res, next) => {
    try {
        await authManager.verifyToken(req);
    } catch (error) {
        req.session = undefined;
    }
    next();
}


module.exports = {
    sessionMiddleware
}