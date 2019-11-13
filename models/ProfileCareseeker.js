const mongoose = require("mongoose");

const ProfileCareseekerSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "careseeker",
    index: true,
    required: true
  },
  seniorname: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  },
  physicalcomplications: {
    type: [String],
    required: true
  },
  languages: {
    type: [String],
    required: true
  },
  address: [
    {
      street: {
        type: String,
        required: true
      },
      postcode: {
        type: String,
        required: true
      },
      state: {
        type: String,
        required: true
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = ProfileCareseeker = mongoose.model(
  "profileCareseeker",
  ProfileCareseekerSchema
);
