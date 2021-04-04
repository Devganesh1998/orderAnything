const router = require('express').Router();
const authController = require('../controllers/auth.controller');

router.post('/login', (...args) => authController.signIn(...args));
router.post('/signup', (...args) => authController.signUp(...args));

module.exports = router;
