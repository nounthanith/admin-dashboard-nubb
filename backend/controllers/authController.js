// signupController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Signup Controller
exports.signup = async (req, res) => {
    try {
        const hashPW = bcrypt.hashSync(req.body.password, 10);
        const data = {
            name: req.body.name,
            email: req.body.email,
            password: hashPW,
            role: req.body.role
        };
        const doc = await User.create(data);

        res.status(200).json({
            status: 'success',
            data: doc
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: err.message
        });
    }
};

// Signin Controller
exports.signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            throw new Error('Please Provide Password And Email!!!');
        }
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error('Email is not correct!!!');
        }
        const isCorrect = bcrypt.compareSync(password, user.password);
        if (!isCorrect) {
            throw new Error('Password is not Correct!!!');
        }
        user.password = undefined;

        const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET, {
            expiresIn: '7d'
        });

        res.cookie('jwt', token, {
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            httpOnly: true,
            secure: false,
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        res.status(200).json({
            status: 'success',
            token,
            data: user
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: err.message
        });
    }
};

// Signout Controller
exports.signout = async (req, res) => {
    try {
        res.clearCookie('jwt');
        res.json({
            status: 'successfully'
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: err.message
        });
    }
};

exports.findAll = async (req, res) => {
    try {
        let query = {};
        if (req.query.name) {
            query.name = { $regex: req.query.name, $options: "i" }; // Case-insensitive search
        }

        const doc = await User.find(query);
        const count = await User.countDocuments(query);
        res.status(200).json({
            message: 'success',
            totalUsers: count, // Return total user count
            data: doc
        });
    } catch (err) { // Change error variable name to 'err' for consistency
        res.status(500).json({
            status: 'error',
            message: err.message
        });
    }
};


// Authorization Middleware
exports.authorization = async (req, res, next) => {
    try {
        // Fixed: should be req.cookies instead of req.cookie
        let token = req.cookies.jwt; // Access cookie from req.cookies
        if (!token) {
            throw new Error('No token provided!!!');
        }
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({ _id: decode.userID }).select('-password');
        req.user = user;
        next();
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: err.message
        });
    }
};


// Current User Controller
exports.current = async (req, res) => {
    try {

        if (!req.user) {
            throw new Error('User not found');
        }
        res.status(200).json({
            status: 'success',
            data: req.user
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: err.message
        });
    }
};

// Restrict To Middleware
exports.restrictTo = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                status: 'error',
                message: 'You do not have permission to perform this action'
            });
        }
        next();
    };
};
