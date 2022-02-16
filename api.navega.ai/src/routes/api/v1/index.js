const router = require('express').Router();
const eventsRoutes = require('./events.routes')

const ROUTE_PATH = '/api/v1';

router.use(ROUTE_PATH,[eventsRoutes]);

module.exports = router;