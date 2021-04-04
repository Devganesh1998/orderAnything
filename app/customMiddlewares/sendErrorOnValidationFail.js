const { validationResult, matchedData } = require('express-validator');

module.exports = (req, res, next) => {
    const errors = validationResult(req);
    const validFields = matchedData(req);
    const validationFailedFields = Object.keys(errors.mapped()).reduce((acc, key) => {
        if (key === '_error') {
            return [...acc, ...errors.mapped()[key].nestedErrors.map(({ param }) => param)];
        }
        return [...acc, key];
    }, []);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.mapped(),
            errormsg: 'Please send the required fields',
            'Required fields': [...Object.keys(validFields), ...validationFailedFields],
        });
    }

    return next();
};
