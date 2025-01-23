const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  category: {
    type: String, 
    required: true,
  },
  jobs: [
    {
      id: {
        type: Number, 
        required: true,
      },
      title: {
        type: String, 
        required: true,
      },
      description: {
        type: String, 
        required: true,
      },
      skillsRequired: {
        type: [String], 
        default: [],
      },
      location: {
        type: String, 
        required: true,
      },
      salaryRange: {
        type: String, 
        required: false,
      },
      
    },
  ],
});

module.exports = mongoose.model('JobCategory', jobSchema);
