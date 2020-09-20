
class JoiValidator {

    validate(schema, object) {
        const { error, value } = schema.validate(object);
        if (error)
            throw error;
        else
            return value;
    }

}

module.exports = new JoiValidator();