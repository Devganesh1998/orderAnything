const router = require('express').Router();
const { body, oneOf } = require('express-validator');
const authController = require('../controllers/auth.controller');
const sendMessageOnValidationFail = require('../customMiddlewares/sendErrorOnValidationFail');
const enumValidator = require('../customMiddlewares/enumValidator');
const { ACCOUNT_TYPE, USER_TYPE } = require('../../config');

router.post(
    '/login',
    [
        oneOf(
            [body('email').exists().bail().isEmail().bail().trim(), body('phoneNo').exists().bail().isInt()],
            'Either email or phoneNo is required to login',
        ),
        [body('password').exists().bail().isString().bail().trim()],
    ],
    sendMessageOnValidationFail,
    (...args) => authController.signIn(...args),
);

router.post(
    '/signup',
    [
        oneOf(
            [body('email').exists().bail().isEmail().bail().trim(), body('phoneNo').exists().bail().isInt()],
            'Either email or phoneNo is required to signUp',
        ),
        body('accountType')
            .exists()
            .bail()
            .isString()
            .custom((value) => enumValidator(value, ACCOUNT_TYPE, 'accountType'))
            .trim(),
        body('userType')
            .exists()
            .bail()
            .isString()
            .bail()
            .custom((value) => enumValidator(value, USER_TYPE, 'userType'))
            .trim(),
        body('password').exists().bail().isString().bail().trim(),
    ],
    sendMessageOnValidationFail,
    (...args) => authController.signUp(...args),
);

router.get('/users', (...args) => authController.getAllUsers(...args));

module.exports = router;
