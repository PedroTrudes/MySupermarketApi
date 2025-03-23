const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    password: {type: String, require: true},
    backgroundkv: {type: String, required: true, default: "#FFFFFF"},
})

const User = mongoose.model("User", UserSchema);

module.exports = User