const express = require('express');
const jobController = require('../controllers/jobController');
const jobRouter = express.Router();
const app = express();


app.use('/job', jobRouter);
// Create a job in the database
// http://localhost:3000/job
jobRouter.post('/', jobController.createJob,
  (req, res) => {
    console.log(res.locals.student);
    return res.status(200).json(res.locals.job);
  });

// Get a job from the database
// http://localhost:3000/job/"name"
jobRouter.get('/:name', jobController.getJob,
  (req, res) => {
    return res.status(200).json(res.locals.job);
  });

// Change a status of job
// http://localhost:3000/job/"name"
jobRouter.patch('/:name', jobController.updateJob,
  (req, res) => {
    return res.status(200).json(res.locals.updatedJob);
  });

// Delete a job from the database
// http://localhost:3000/job/"name"
jobRouter.delete('/:name', jobController.deleteJob,
  (req, res) => {
    return res.status(200).json(res.locals.deletedJob);
  });