const express = require('express');
const router = express.Router();
const { checkAuth, checkAdmin } = require("../middleware");

const authRouter = require ('./auth.router.js')

// Import your route modules
const adminRouter = require('./admin.router');
const bookingRouter = require('./booking.router');
const userRouter = require('./user.router');
const locationRouter = require('./location.router');

// Apply middleware globally or for specific routes as needed
//router.use(checkAuth);

// Routes without authentication requirements
router.use('/auth', authRouter);

// Routes requiring authentication
router.use('/admin', checkAdmin, adminRouter);
router.use('/booking', bookingRouter);
router.use('/user', userRouter);
router.use('/location', locationRouter);

module.exports = router
