const userModel = require("../models/userModel");


async function registerUser(req) {
    const user = await userModel.create(req);
    return await user.save();
}
async function login() {

}

async function userAlreadyAvailable(email) {
    return await userModel.findOne({ email });
}

module.exports = { registerUser, login, userAlreadyAvailable }