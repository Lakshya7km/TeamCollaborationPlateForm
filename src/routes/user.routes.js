const express = require('express');
const { createUser, userLogin } = require('../controllers/user.controller')
const asyncHandler = require('../utils/asyncHandler')
const router = express.Router();

router.post('/register', asyncHandler(createUser));
router.post('/login', asyncHandler(userLogin))
module.exports = router;