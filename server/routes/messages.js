const express = require('express');
const router = express.Router();
const { Message } = require('../models/message');

router.post("/", async (req, res) => {
  try {
    const { ID, publication_date, publication_time, messageText } = req.body;

    const message = new Message({
      userID: ID,
      publicationDate: publication_date,
      publicationTime: publication_time,
      content: messageText
    });

    await message.save();

    res.status(201).json({ message: 'Message added successfully' });
  } catch (error) {
    console.error('Failed to add message:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
