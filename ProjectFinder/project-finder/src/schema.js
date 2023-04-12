const mongoose = require('mongoose');


const staffSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  department: { type: String, required: true },
}, { collection: 'Staff' }); // specify collection name here

const studentSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  degree: { type: String, required: true },
  skills: { type: [String], required: true },
  interest: { type: [String], required: true },
}, { collection: 'Student' }); // specify collection name here



const Staff = mongoose.model('Staff', staffSchema);
const Student = mongoose.model('Student', studentSchema);


module.exports = { Staff, Student };
