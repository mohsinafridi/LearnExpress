const moongoose = require('mongoose');

const userSchema = new moongoose.Schema({
    username: {
        type: String,
        require: [true, "Username is required."]
    },
    email: {
        type: String,
        require: [true, "Email is required."],
        unique: [true, "Email already registered."]
    },
    password: {
        type: String,
        require: [true, "Password is required."]
    }
},
    {
        timestamps: true,
    }
);

module.exports = moongoose.model("User", userSchema);