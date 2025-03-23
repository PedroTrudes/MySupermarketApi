const mongoose = require("mongoose");
const User = require("../model/User");

const createUser = (body) => User.create(body);

const getAll = () => User.find();

const getById = (id) => User.findById(id);


module.exports = {createUser, getAll, getById}