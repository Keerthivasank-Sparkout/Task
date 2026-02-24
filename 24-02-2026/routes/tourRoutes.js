const express = require('express')
const router = express.Router()
const {getTour,updateTour,deleteTour,getAllTour,alishTour, creatTour} = require('./../Controller/tourController')
const authController = require('./../Controller/authController')


router
    .route('/topTours')
    .get(alishTour,getAllTour)

router
    .route('/')
    .get(authController.protect,getAllTour)
    .post(creatTour)
router
    .route('/:id')
    .get(authController.protect,getTour)
    .patch(updateTour)
    .delete(authController.protect,authController.restrictTo('admin','guide'),deleteTour)
    
module.exports = router;