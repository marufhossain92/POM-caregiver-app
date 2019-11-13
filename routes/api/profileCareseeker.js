const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");

const ProfileCareseeker = require("../../models/ProfileCareseeker");
const Careseeker = require("../../models/Careseeker");

//@route   Get api/profile-careseeker/careseeker/:user_id
//@desc    Get careseeker's profile by user ID
//@access  Public
router.get("/careseeker/:user_id", async (req, res) => {
  console.log(req.params);
  try {
    const profileCareseeker = await ProfileCareseeker.findOne({
      user: req.params.user_id
    }).populate({
      path: "user",
      model: "user"
    });

    if (!profileCareseeker)
      return res.status(400).json({ msg: "Profile not found" });

    res.json(profileCareseeker);
  } catch (err) {
    console.error(err.message);
    if (err.kind == "ObjectId") {
      return res.status(400).json({ msg: "Profile not found" });
    }
    res.status(500).send("Server Error");
  }
});

//@route   GET api/profile-careseeker/me
//@desc    Get current careseeker's profile
//@access  Private
router.get("/me", auth, async (req, res) => {
  console.log(req.user);
  try {
    const profileCareseeker = await ProfileCareseeker.findOne({
      user: req.user.id
    }).populate("user", ["name"]);

    if (!profileCareseeker) {
      res.status(400).json({ msg: "There is no profile for this user" });
    }

    res.json(profileCareseeker);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route   POST api/profile-careseeker
//@desc    Create or Update user profile
//@access  Private
router.post(
  "/",
  [
    auth,
    [
      check("seniorname", "Senior Name is required")
        .not()
        .isEmpty(),
      check("gender", "Gender is required")
        .not()
        .isEmpty(),
      check("age", "Age are required")
        .not()
        .isEmpty(),
      check("physicalcomplications", "Physical complications are required")
        .not()
        .isEmpty(),
      check("languages", "Languages are required")
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
      seniorname,
      gender,
      age,
      physicalcomplications,
      languages
    } = req.body;

    //Build profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    if (seniorname) profileFields.seniorname = seniorname;
    if (gender) profileFields.gender = gender;
    if (age) profileFields.age = age;
    if (physicalcomplications) {
      profileFields.physicalcomplications = physicalcomplications
        .split(",")
        .map(physicalcomplication => physicalcomplication.trim());
    }
    if (languages) {
      profileFields.languages = languages
        .split(",")
        .map(language => language.trim());
    }

    try {
      let profileCareseeker = await ProfileCareseeker.findOne({
        user: req.user.id
      });

      if (profileCareseeker) {
        //Update
        profileCareseeker = await ProfileCareseeker.findOneAndUpdate(
          {
            user: req.user.id
          },
          { $set: profileFields },
          { new: true }
        );

        return res.json(profileCareseeker);
      }

      //Create
      profileCareseeker = new ProfileCareseeker(profileFields);

      await profileCareseeker.save();
      res.json(profileCareseeker);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

//@route   DELETE api/profile-careseeker
//@desc    Delete profile and user
//@access  Private
router.delete("/", auth, async (req, res) => {
  try {
    //Remove profile
    await ProfileCareseeker.findByOneAndRemove({
      //.findByIdAndRemove
      user: req.user.id
    });
    //Remove user
    await Careseeker.findByOneAndRemove({ _id: req.user.id }); //Problem: Cast to ObjectId failed for value "{ user: '5dba7b2f1570c4298c67fb2a' }" at path "_id" for model "profileCaregiver"
    //.findByIdAndRemove   //user_id: req.user.id
    res.json({ msg: "User deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route   PUT api/profile-careseeker/address
//@desc    Add profile address
//@access  Private
router.put(
  "/address",
  [
    auth,
    [
      check("street", "Street is required")
        .not()
        .isEmpty(),
      check("postcode", "Post code is required")
        .not()
        .isEmpty(),
      check("state", "State is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { street, postcode, state } = req.body;

    const newAdd = {
      street,
      postcode,
      state
    };

    try {
      const profile = await ProfileCareseeker.findOne({ user: req.user.id });

      profile.address.unshift(newAdd);

      await profile.save();

      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

//@route    DELETE api/profile-careseeker/address/:add_id
//@desc    Delete address from profile
//@access  Private
router.delete("/address/:add_id", auth, async (req, res) => {
  try {
    const profile = await ProfileCareseeker.findOne({ user: req.user.id });

    //Get remove index
    const removeIndex = profile.address
      .map(item => item.id)
      .indexOf(req.params.add_id);
    profile.address.splice(removeIndex, 1);

    await profile.save();

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
