const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const User = require('../models/user.js');


exports.signup = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed!');
        error.statusCode = 422;
        error.data = errors.array();
        throw error;
    }

    const userName = req.body.userName;
    const email = req.body.email;
    const password = req.body.password;
    bcrypt.hash(password, 12)
        .then(hashedPass => {
            const user = new User({
                userName: userName,
                email: email,
                password: hashedPass

            });
            return user.save();
        })
        .then(result => {
            res.status(201).json({message: 'User created', userId: result._id});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
}