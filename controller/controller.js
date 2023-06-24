const {database} = require('./../mongo');

async function getEventById(req, res) {
  const eventId = req.params.id;

  try {
    const event = await database.getEventById(eventId);
    if (event) {
      res.json(event);
    } else {
      res.status(404).json({ error: 'Event not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function getLatestEvents(req, res) {
  const { type, limit, page } = req.query;

  try {
    const events = await database.getLatestEvents(type, limit, page);
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function createEvent(req, res) {
  const eventData = req.body;

  try {
    const eventId = await database.createEvent(eventData);
    res.json({ id: eventId });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function updateEvent(req, res) {
  const eventId = req.params.id;
  const eventData = req.body;

  try {
    const updatedEvent = await database.updateEvent(eventId, eventData);
    if (updatedEvent) {
      res.json(updatedEvent);
    } else {
      res.status(404).json({ error: 'Event not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function deleteEvent(req, res) {
  const eventId = req.params.id;

  try {
    await database.deleteEvent(eventId);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  getEventById,
  getLatestEvents,
  createEvent,
  updateEvent,
  deleteEvent
};
