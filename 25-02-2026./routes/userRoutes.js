const express = require('express')
const userController = require('./../Controller/userController')
const authController = require('./../Controller/authController')
const router = express.Router()

router.post('/forgotPassword', authController.forgotPassword)

router.patch('/resetPassword/:token',authController.resetPassword)

router.delete('/deleteMe',authController.protect,userController.deleteMe)

router.patch('/updateMypassword',authController.protect,authController.updatePassword)

router.patch('/updateMe',authController.protect,userController.updateMe)

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