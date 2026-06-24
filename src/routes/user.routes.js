const express = require('express');
const {createUser} = require('../controllers/user.controller')
const asyncHandler = require('../utils/asyncHandler')
const router = express.Router();

router.post('/', asyncHandler(createUser));
module.exports = router;