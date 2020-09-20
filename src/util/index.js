
class Utility {

    notEmptyString(value) {
        if (typeof value == 'string') {
            value = value.trim();
            if(value)
                return value;
        }
        throw new Error(`Not a valid String`)
    }
}

module.exports = new Utility();