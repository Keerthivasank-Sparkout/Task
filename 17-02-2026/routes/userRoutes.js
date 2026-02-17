const express = require('express')
const {getUsers,getAllUsers,deleteUsers,updateUsers,createUsers}=require('../controller/userController')
const router = express.Router()

router
    .route('/')
    .get(getAllUsers)
    .post(createUsers);
router
    .route('/:id')
    .get(getUsers)
    .patch(updateUsers)
    .delete(deleteUsers);

module.exports = router;