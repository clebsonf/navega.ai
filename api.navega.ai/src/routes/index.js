const router = require('express').Router();
const v1 = require('./api/v1');

router.use(v1);

module.exports = router;