const router = require('express').Router();
const {eventsController} = require('../../../controller');

router.get('/events', eventsController.getAllEvents);

router.post('/events', eventsController.creatEvents);

module.exports = router;