const jwt = require("jsonwebtoken");
const { body, validationResult } = require('express-validator');

const auth = async (req, res, next) => {
  try {
    if (typeof req.headers.authorization === 'string') {
      const token = req.headers.authorization.split(" ")[1];
      let decodedData;

      if (token) {
        decodedData = jwt.verify(JSON.parse(token), "test");

        req.userId = decodedData?.id;
      }
      else {
        decodedData = jwt.decode(token);

        req.userId = decodedData?.sub;
      }
      next();
    }
    else {
      res.status(401).json({message: "Unauthorized access."})
    }

  } catch (error) {
    console.log(error);
    res.json({ message: "Invalid Token." });
  }
};


const validateUserLogin =
  [
    body('usrname', 'Username must be 5+ characters.')
      .exists()
      .isLength({ min: 5, max: 15 }),
    body('password', 'Password is invalid.')
      .exists()
      .isLength({ min: 8, max: 16 }),

    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
      }
      next();
    }
  ]

const validateUserSignUp = [
  body('firstName', 'Enter valid first name.')
    .exists()
  ,
  body('lastName', 'Enter valid last name.')
    .exists(),
  body('usrname', 'Username must be 5+ characters.')
    .exists()
    .isLength({ min: 5, max: 15 }),
  body('password', 'Password is invalid.')
    .exists()
    .isLength({ min: 8, max: 16 }),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    next();
  }
]

module.exports = {
  auth,
  validateUserLogin,
  validateUserSignUp
};
