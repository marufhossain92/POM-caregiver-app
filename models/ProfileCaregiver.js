const mongoose = require("mongoose");

const ProfileCaregiverSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  hourlywage: {
    type: String,
    required: true
  },
  experience: {
    type: String,
    required: true
  },
  services: {
    type: [String],
    required: true
  },
  skills: {
    type: [String],
    required: true
  },
  languages: {
    type: [String],
    required: true
  },
  education: [
    {
      school: {
        type: String,
        required: true
      },
      degree: {
        type: String,
        required: true
      },
      fieldofstudy: {
        type: String,
        required: true
      }
    }
  ],
  certification: [
    {
      institution: {
        type: String,
        required: true
      },
      certification: {
        type: String,
        required: true
      },
      fieldofstudy: {
        type: String,
        required: true
      }
    }
  ],
  transportation: {
    type: Boolean,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = ProfileCaregiver = mongoose.model(
  "profileCaregiver",
  ProfileCaregiverSchema
);
