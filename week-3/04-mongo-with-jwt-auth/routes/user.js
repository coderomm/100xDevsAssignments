const express = require("express");
const userMiddleware = require("../middleware/user");
const { Admin, User, Course } = require("../db");
const { JWT_SECRET } = require("../config");
const router = express.Router();
const jwt = require("jsonwebtoken");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.headers.username;
    const password = req.headers.password;

    await Admin.create({
        username: username,
        password: password
    })

    res.json({
        message: 'user created successfully'
    })
});

router.post('/signin', async (req, res) => {
    // Implement user signin logic
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.find({
        username,
        password
    })
    if (user) {
        const token = jwt.sign({
            username
        }, JWT_SECRET);

        res.status(200).json({
            token
        })
    } else {
        res.status(411).json({
            message: "Incorrect email and pass"
        })
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({});
    res.status(200).json({
        courses: response
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const username = req.headers.username
    const courseId = req.params.courseId;
    await User.updateOne({ username: username }, {
        "$push": {
            purchasedCourses: courseId
        }
    })
    res.status(200).json({
        msg: "Purchase complete"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    const user = await User.findOne({
        username: req.headers.username
    });
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });
    res.status(200).json({
        courses: courses
    })
});

module.exports = router