const userService = require('../services/userService');
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


//@desc Register User
//@route Post /api/users/register
//@access Public
const register = asyncHandler(async (req, res) => {
    console.log("register calls.")
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.statusCode(400);
        throw new Error("All fields are mandatory.");
    }
    const isUserAvailable = await userService.userAlreadyAvailable(email);
    if (isUserAvailable) {
        res.status(400);
        throw new Error("User already registered!");
    }

    // hash the passord before saving using bcrypt
    const hashPassword = await bcrypt.hash(password, 10);
    const userObj = { username, email, password: hashPassword };
    const user = await userService.registerUser(userObj);
    if (user) {
        res.status(201).json({ _id: user.id, email: user.email });
    } else {
        res.status(400);
        throw new Error("User data is not valid");
    }
    res.status(200).json({ message: "User is registered successfully." });
});

//@desc Login the User
//@route Post /api/users/login
//@access Public
const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error("All fileds are mandatory");
    }

    const user = await userService.userAlreadyAvailable(email);
    if (user && bcrypt.compare(password, user.password)) {
        // creat jwt token    
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user.id,
            },
        },
            "process.env.ACCESSTOKEN",
            { expiresIn: "1m" }
        );
        res.status(200).json({ accessToken });
    } else {
        res.status(401);
        throw new Error("email or password is not valid");
    }
    const login = await userService.login();
    res.status(200).json(login);
});

//@desc Get Current User
//@route Post /api/users/getcurrentuser
//@access Private
const getCurrentUser = asyncHandler(async (req, res) => {
    res.status(200).json(req.body);
});

module.exports = { register, login, getCurrentUser };