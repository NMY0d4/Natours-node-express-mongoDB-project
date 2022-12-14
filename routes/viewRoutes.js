const express = require('express');
const bookingController = require('../controllers/bookingController');
const {
  getOverview,
  getTour,
  getLoginForm,
  getSignupForm,
  getAccount,
  getMyTours,
  // updateUserData,
} = require('../controllers/viewsController');
const authController = require('../controllers/authController');

const router = express.Router();

router.get('/', authController.isLoggedIn, getOverview);
router.get('/tour/:slug', authController.isLoggedIn, getTour);
router.get('/login', getLoginForm);
router.get('/signup', getSignupForm);
router.get('/me', authController.protect, getAccount);
router.get(
  '/my-tours',
  bookingController.createBookingCheckout,
  authController.protect,
  getMyTours
);
// router.post('/submit-user-data', authController.protect, updateUserData);

module.exports = router;
