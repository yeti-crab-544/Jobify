const Job = require('../models/jobModel');

const JobController = {
  // Create a new Job in the Database
  // Their information will be sent in the request body
  // This should send the created Job
  async createJob(req, res, next) {
    try {
      const { role, company, location, status, contact, referral, salary, note } = req.body;
      // could you help me understand what exactly the req.body is?
      const newJob = await Job.create({ role, company, location, status, contact, referral, salary, note });
      res.locals.job = newJob;
      return next();
    } catch (err) {
      return next({
        log: 'Express error in JobController.createJob',
        status: 400,
        message: {
          err: 'An error occurred inside JobController.createJob',
        },
      });
    }
  },
  // finds specific document based off of company name in params
  async getJob(req, res, next) {
    try {
      const { name } = req.params;
      const foundJob = await Job.findOne({ company: name });
      if (!foundJob) {
        return res.status(400).send('No Job found');
      }
      res.locals.foundJob = foundJob;
      return next();
    } catch (err) {
      return next({
        log: 'Express error in JobController.getJob',
        status: 400,
        message: {
          err: 'An error occured inside JobController.getJob',
        },
      });
    }
  },
  // updates status of job 
  async updateJob(req, res, next) {
    try {
      const { name } = req.params;
      const { newStatus } = req.body;
      const updatedJob = await Job.findOneAndUpdate(
        // find one and update - first arg is what we are looking for, second arg is updated value
        { status: name },
        { status: newStatus },
        { new: true }
      );
      if (!updatedJob) {
        return res.status(400).send('No Job found');
      }
      res.locals.updatedJob = updatedJob;
      return next();
    } catch (err) {
      return next({
        log: 'Express error in JobController.updateJob',
        status: 400,
        message: {
          err: 'An error occured inside JobController.updateJob',
        },
      });
    }
  },
  async deleteJob(req, res, next) {
    try {
      const { name } = req.params;
      const deletedJob = await Job.findOneAndDelete({ company: name });
      if (!deletedJob) {
        return res.status(400).send('No Job found');
      }
      res.locals.deletedJob = { deleteJob: deletedJob };
      return next();
    } catch (err) {
      return next({
        log: 'Express error in JobController.deleteJob',
        status: 400,
        message: {
          err: 'An error occured inside JobController.deleteJob',
        },
      });
    }
  }
};

module.exports = JobController;