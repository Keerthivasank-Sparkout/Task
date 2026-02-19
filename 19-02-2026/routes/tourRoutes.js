const express = require('express');
const router = express.Router();
const {getTours,getAllTour,createTour,deleteTour,updateTour,checkId,checkBody}=require('../controller/tourController')

// router.param('id',checkId);//calling the middleware 

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