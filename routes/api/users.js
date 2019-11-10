const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

const Caregiver = require("../../models/Caregiver");

//@route   POST api/users
//@desc    Register user
//@access  Public
router.post(
  "/",
  [
    check("name", "Name is required")
      .not()
      .isEmpty(),
    check("gender", "Gender is required")
      .not()
      .isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
    check("city", "City is required")
      .not()
      .isEmpty(),
    check("postalcode", "Postal Code is required")
      .not()
      .isEmpty(),
    check("phone", "Phone number is required")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, gender, email, password, city, postalcode, phone } = req.body;

    try {
      //See if user exists
      let user = await Caregiver.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }

      //Get users gravatar
      const avatar = gravatar.url(email, {
        s: "100",
        r: "pg",
        d: "mm"
      });

      user = new Caregiver({
        name,
        gender,
        email,
        password,
        city,
        postalcode,
        phone,
        avatar
      });

      //Encrypt Password
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      //Return jsonwebtoken
      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
