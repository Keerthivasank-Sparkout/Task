const express = require('express')
const router = express.Router()
const {getTour,updateTour,deleteTour,getAllTour,alishTour, creatTour} = require('./../Controller/tourController')


router
    .route('/topTours')
    .get(alishTour,getAllTour)

router
    .route('/')
    .get(getAllTour)
    .post(creatTour)
router
    .route('/:id')
    .get(getTour)
    .patch(updateTour)
    .delete(deleteTour)
    
module.exports = router;