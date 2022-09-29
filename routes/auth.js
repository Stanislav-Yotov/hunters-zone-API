const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const User = require('../models/user.js');
const authController = require('../controllers/auth.js');

router.post('/signup', [
    body('email')
        .isEmail()
        .withMessage('Please enter a valid email')
        .custom((value, { req }) => {
            return User.findOne({ email: value }).then(userDoc => {
                if (userDoc) {
                    return Promise.reject('Email adress already exists');
                }
            })
        })
        .normalizeEmail(),
    body('password')
        .trim()
        .isLength({ min: 5 })
        .withMessage('Please enter a valid password'),
    body('userName')
        .trim()
        .not()
        .isEmpty()
        .withMessage('please enter a valid username')
], authController.signup);

module.exports = router;