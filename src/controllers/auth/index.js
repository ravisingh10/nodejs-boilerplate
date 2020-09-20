const ControllerAbstract = require('./../controller-abstract');
const passwordHelper = require('./password-helper');

const { User, Password } = require('./../../models');

class AuthController extends ControllerAbstract {

    async authenticate(email, plainPassword) {
        let userDetails = await this.getUserByEmail(email);
        let { password } = userDetails.password;
        if (!password) {
            throw new Error('No password found');
        }
        let isAuthenticated = await passwordHelper.authenticate(plainPassword, password);
        if(isAuthenticated) {
            let ud = userDetails.dataValues;
            delete ud['password'];
            return ud;
        }
        throw new Error(`Authetication failed`);
    }

    async getUserByEmail(email) {
        if (!email)
            throw new Error('Invalid username');
        return User.findOne({
            where: { email: email },
            include: [{ model: Password }]
        })
    }


}

module.exports = new AuthController();