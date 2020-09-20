const bcrypt = require('bcrypt');

class PasswordHelper {
    constructor() {
        this.SALT_ROUNDS = 9;
        this.SALT = bcrypt.genSaltSync(this.SALT_ROUNDS);
    }

    async hash(plainText) {
        return bcrypt.hash(plainText, this.SALT);
    }

    async authenticate(plainText, encrypted) {
        return bcrypt.compare(plainText, encrypted);
    }
}

module.exports = new PasswordHelper()