const express = require('express')
const userController = require('./../Controller/userController')
const authController = require('./../Controller/authController')

const router = express.Router()

router.post('/forgotPassword', authController.forgotPassword)

router
    .route('/resetpassword')
    .post(authController.resetPassword)

router
    .route('/signup')
    .post(authController.signup)
router
    .route('/login')
    .post(authController.login)


router
    .route('/')
    .post(userController.createUser)
    .get(userController.getAllUser)


module.exports = router