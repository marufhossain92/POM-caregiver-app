const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");

const ProfileCaregiver = require("../../models/ProfileCaregiver");
const Caregiver = require("../../models/Caregiver");

//@route   Get api/profile-caregiver
//@desc    Get all caregiver's profile
//@access  Public
router.get("/", async (req, res) => {
  try {
    const profileCaregivers = await ProfileCaregiver.find().populate("user", [
      "name",
      "avatar"
    ]);
    res.json(profileCaregivers);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route   Get api/profile-caregiver/user/:user_id
//@desc    Get caregiver's profile by user ID
//@access  Public
router.get("/user/:user_id", async (req, res) => {
  console.log(req.params);
  try {
    const profileCaregiver = await ProfileCaregiver.findOne({
      user: req.params.user_id
    }).populate({
      path: "user",
      model: "user"
    });

    if (!profileCaregiver)
      return res.status(400).json({ msg: "Profile not found" });

    res.json(profileCaregiver);
  } catch (err) {
    console.error(err.message);
    if (err.kind == "ObjectId") {
      return res.status(400).json({ msg: "Profile not found" });
    }
    res.status(500).send("Server Error");
  }
});

//@route   GET api/profile-caregiver/me
//@desc    Get current caregiver's profile
//@access  Private
router.get("/me", auth, async (req, res) => {
  console.log(req.user);
  try {
    const profileCaregiver = await ProfileCaregiver.findOne({
      user: req.user.id
    }).populate("user", ["name", "avatar"]);

    if (!profileCaregiver) {
      res.status(400).json({ msg: "There is no profile for this user" });
    }

    res.json(profileCaregiver);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route   POST api/profile-caregiver
//@desc    Create or Update user profile
//@access  Private
router.post(
  "/",
  [
    auth,
    [
      check("hourlywage", "Hourly wage is required")
        .not()
        .isEmpty(),
      check("experience", "Experience is required")
        .not()
        .isEmpty(),
      check("services", "Services are required")
        .not()
        .isEmpty(),
      check("skills", "Skills are required")
        .not()
        .isEmpty(),
      check("languages", "Languages are required")
        .not()
        .isEmpty(),
      check("transportation", "Transportation is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //de-structuring
    const {
      hourlywage,
      experience,
      services,
      skills,
      languages,
      transportation
    } = req.body;

    //Build profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    if (hourlywage) profileFields.hourlywage = hourlywage;
    if (experience) profileFields.experience = experience;
    if (services) {
      profileFields.services = services
        .split(",")
        .map(service => service.trim());
    }
    if (skills) {
      profileFields.skills = skills.split(",").map(skill => skill.trim());
    }
    if (languages) {
      profileFields.languages = languages
        .split(",")
        .map(language => language.trim());
    }

    if (transportation) profileFields.transportation = transportation;

    try {
      let profileCaregiver = await ProfileCaregiver.findOne({
        user: req.user.id
      });

      if (profileCaregiver) {
        //Update
        profileCaregiver = await ProfileCaregiver.findOneAndUpdate(
          {
            user: req.user.id
          },
          { $set: profileFields },
          { new: true }
        );

        return res.json(profileCaregiver);
      }

      //Create
      profileCaregiver = new ProfileCaregiver(profileFields);

      await profileCaregiver.save();
      res.json(profileCaregiver);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

//@route   DELETE api/profile-caregiver
//@desc    Delete profile and user
//@access  Private
router.delete("/", auth, async (req, res) => {
  try {
    //Remove profile
    await ProfileCaregiver.findByOneAndRemove({
      //.findByIdAndRemove
      user: req.user.id
    });
    //Remove user
    await Caregiver.findByOneAndRemove({ _id: req.user.id }); //Problem: Cast to ObjectId failed for value "{ user: '5dba7b2f1570c4298c67fb2a' }" at path "_id" for model "profileCaregiver"
    //.findByIdAndRemove   //user_id: req.user.id
    res.json({ msg: "User deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route   PUT api/profile-caregiver/education
//@desc    Add profile education
//@access  Private
router.put(
  "/education",
  [
    auth,
    [
      check("school", "School is required")
        .not()
        .isEmpty(),
      check("degree", "Degree is required")
        .not()
        .isEmpty(),
      check("fieldofstudy", "Field of study is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { school, degree, fieldofstudy } = req.body;

    const newEdu = {
      school,
      degree,
      fieldofstudy
    };

    try {
      const profile = await ProfileCaregiver.findOne({ user: req.user.id });

      profile.education.unshift(newEdu);

      await profile.save();

      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

//@route    DELETE api/profile-caregiver/education/:edu_id
//@desc    Delete education from profile
//@access  Private
router.delete("/education/:edu_id", auth, async (req, res) => {
  try {
    const profile = await ProfileCaregiver.findOne({ user: req.user.id });

    //Get remove index
    const removeIndex = profile.education
      .map(item => item.id)
      .indexOf(req.params.edu_id);
    profile.education.splice(removeIndex, 1);

    await profile.save();

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//@route   PUT api/profile-caregiver/certification
//@desc    Add profile certification
//@access  Private
router.put(
  "/certification",
  [
    auth,
    [
      check("institution", "School is institution")
        .not()
        .isEmpty(),
      check("certification", "Degree is required")
        .not()
        .isEmpty(),
      check("fieldofstudy", "Field of study is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { institution, certification, fieldofstudy } = req.body;

    const newCer = {
      institution,
      certification,
      fieldofstudy
    };

    try {
      const profile = await ProfileCaregiver.findOne({ user: req.user.id });

      profile.certification.unshift(newCer);

      await profile.save();

      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

//@route    DELETE api/profile-caregiver/certification/:cer_id
//@desc    Delete certification from profile
//@access  Private
router.delete("/certification/:cer_id", auth, async (req, res) => {
  try {
    const profile = await ProfileCaregiver.findOne({ user: req.user.id });

    //Get remove index
    const removeIndex = profile.certification
      .map(item => item.id)
      .indexOf(req.params.cer_id);
    profile.certification.splice(removeIndex, 1);

    await profile.save();

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
