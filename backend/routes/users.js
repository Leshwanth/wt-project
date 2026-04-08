const express = require('express');
const router = express.Router();
const { signUp, login, getUsers, getUserById } = require('../controllers/users');
const { verifyToken } = require('../middleware.js');


// signUp
router.post("/signup", signUp);

// login
router.post('/login', login);

// GET users
router.get("/", verifyToken, getUsers);

// GET users/:id
router.get("/:id", verifyToken, getUserById);


module.exports = router;