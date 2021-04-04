const enumValidator = (value, ENUM, fieldName) => {
    if (value in ENUM) {
        return true;
    }
    throw new Error(`Invalid ${fieldName} provided, Available ${fieldName} options - ${Object.keys(ENUM).join(', ')}`);
};

module.exports = enumValidator;
