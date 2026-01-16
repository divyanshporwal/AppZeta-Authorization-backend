const express = require('express')
const authController = require('../controllers/auth.controller')
const authMiddleware = require('../middleware/auth.middleware')


const router = express.Router()

//user routes
router.post('/register',authController.registerUser)
router.post('/login',authController.loginUser);
router.get('/logout',authController.logoutUser)
router.get('/me',authMiddleware.authUserMiddleware, authController.getUser)


module.exports = router;