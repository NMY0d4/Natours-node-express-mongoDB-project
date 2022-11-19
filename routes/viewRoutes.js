const express = require('express');
const bookingController = require('../controllers/bookingController');
const {
  getOverview,
  getTour,
  getLoginForm,
  getAccount,
  getMyTours,
  // updateUserData,
} = require('../controllers/viewsController');
const authController = require('../controllers/authController');

const router = express.Router();

router.get(
  '/',
  bookingController.createBookingCheckout,
  authController.isLoggedIn,
  getOverview
);
router.get('/tour/:slug', authController.isLoggedIn, getTour);
router.get('/login', authController.isLoggedIn, getLoginForm);
router.get('/me', authController.protect, getAccount);
router.get('/my-tours', authController.protect, getMyTours);
// router.post('/submit-user-data', authController.protect, updateUserData);

module.exports = router;
