const dotenv = require('dotenv');
const express = require('express');
const { Student, Staff } = require('./schema');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');

// Load env
dotenv.config({ path: '/.env' });

//create express app
const app = express();


// Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Connect to database
const mongoose = require("mongoose");
const user = process.env.ATLAS_USER;
const password = process.env.ATLAS_PASSWORD;
const db_name = 'Users';
const db_url = `mongodb+srv://${user}:${password}@cluster0.wpgxqup.mongodb.net/${db_name}?retryWrites=true&w=majority`;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose
  .connect(db_url, options)
  .then(() => {
    console.log("Successfully connected!");
  })
  .catch((e) => {
    console.error(e, "Could not connect!");
  });


// Route for creating a new staff
app.post('/staff', async (req, res) => {
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
app.post('/student', async (req, res) => {
  console.log('THIS IS STUDENT API');
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).send(student);
  } catch (error) {
    res.status(400).send(error);
  }
});

  // start the server
  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Server is live http://localhost:${PORT}`);
  });
  module.exports = { Student, Staff };
