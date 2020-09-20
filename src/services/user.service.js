const { User } = require("../models");
const ServiceAbstract = require("./service-abstract");

class UserService extends ServiceAbstract {

    async create(user) {
        let created = await User.create(user);
        return created;
    }

}

module.exports = new UserService();