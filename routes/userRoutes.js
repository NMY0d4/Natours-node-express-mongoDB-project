const express = require('express');
const userController = require('../controllers/userController');
const {
  signup,
  login,
  forgotPassword,
  resetPassword,
  updatePassword,
  protect,
  // restrictTo,
} = require('../controllers/authController');

const router = express.Router();

router.patch('/updateMyPassword', protect, updatePassword);
router.post('/signup', signup);
router.post('/login', login);

router.post('/forgotPassword', forgotPassword);
router.patch('/resetPassword/:token', resetPassword);

router.get('/me', protect, userController.getMe, userController.getUser);
router.patch('/updateMe', protect, userController.updateMe);
router.delete('/deleteMe', protect, userController.deleteMe);

router.route('/').get(userController.getAllUsers);
// .post(userController.createUser);
router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
