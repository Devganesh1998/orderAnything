const router = require('express').Router();

router.use('/auth', require('./auth.router'));

module.exports = router;
