const userController = require('./../../user/index');

class OauthHelper {

    async findOrCreateUserWithEmail(firstname, lastname, email, pic) {
        let user = await userController.findOrCreateUser({
            firstname,
            lastname,
            email,
            pic,
        })
        return user;
    }
}

module.exports = new OauthHelper();