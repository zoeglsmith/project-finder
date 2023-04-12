const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const { Staff, Student } = require('./schema');

// Route for creating a new staff
router.post('/staff', async (req, res) => {
  console.log('THIS IS STAFF API');

  try {
    const staff = new Staff(req.body);
    await staff.save();
    res.status(201).send(staff);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Route for creating a new student
router.post('/student', async (req, res) => {
  console.log('THIS IS STUDENT API');
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).send(student);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
