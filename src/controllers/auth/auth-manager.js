const JWTManager = require('./../../util/jwt-manager');

class AuthentiationManager {
    constructor() {
        this.jwtManager = new JWTManager(
            process.env.SESSION_SECRET,
            process.env.TOKEN_EXPIRATION,
        )
        this.COOKIE_KEY = 'token';
        this.COOKIE_EXPIRATION = (process.env.APP_ENV === 'DEV' ? 1 : 30) * 86400; 
    }

    async attachToken(res, payload) {
        let hashedToken = await this.jwtManager.generateToken(JSON.parse(JSON.stringify(payload)));
        res.cookie(this.COOKIE_KEY, hashedToken, {
            expiresIn: this.COOKIE_EXPIRATION,
            httpOnly: true,
        });
        return res;
    }

    async verifyToken(req) {
        let { cookies: { token = '' } } = req;
        let decData = await this.jwtManager.decrypt(token);
        decData = JSON.parse(decData);
        req.session = decData;
        return req;
    }

}

module.exports = new AuthentiationManager();