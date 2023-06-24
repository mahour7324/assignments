const express = require('express');
const controller = require('./../controller/controller');

const router = express.Router();

router.get('/events/:id', controller.getEventById);
router.get('/events', controller.getLatestEvents);
router.post('/events', controller.createEvent);
router.put('/events/:id', controller.updateEvent);
router.delete('/events/:id', controller.deleteEvent);

module.exports = router;
