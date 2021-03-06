const express = require('express');
const { adminMiddleware, requireSignin } = require('../../common-middleware');
const { initialData } = require('../../controllers/admin/initialData.controller');
const router = express.Router();

router.post('/initialdata', requireSignin, adminMiddleware, initialData);

module.exports = router;