const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// sets schema for 'user' collection
const jobSchema = new Schema({
  role: {type: String, required: true, unique: true},
  company: {type: String, required: true},
  location: {type: String, required: true},
  status: {type: String, required: true},
  contact: {type: String},
  referral: {type: String},
  salary: {type: String},
  note: {type: String},
});

// creats a model for the 'user' collection that will be part of the export
const Job = mongoose.model('job', jobSchema);

module.exports = Job;