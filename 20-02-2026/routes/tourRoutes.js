const express = require('express');
const router = express.Router();
const {getTours,getAllTour,createTour,deleteTour,updateTour,alishTour,getTourStats}=require('../controller/tourController')

// router.param('id',checkId);//calling the middleware 
router
    .route('/toptours')
    .get(alishTour,getAllTour)

router
    .route('/tourStats')
    .get(getTourStats)    

router
    .route('/')
    .get(getAllTour)
    .post(createTour);//first pass the request to middleware then handle it 
router
    .route('/:id')
    .get(getTours)
    .patch(updateTour)
    .delete(deleteTour);


module.exports = router;