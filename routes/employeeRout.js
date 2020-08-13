const express=require('express');
const router=express.Router();
const loginmodule=require('../module/employeeModule');
const middleware=require('../module/middleWares');
const postmodule=require('../module/postModule')
const connectionmodule=require('../module/connectionModule');
const connectionmodel = require('../models/connectionModel');


router.post('/login',middleware.logincheckUserInfo,loginmodule.login);
router.post('/signup',middleware.passwordHashing,loginmodule.signup);
router.post('/updateemployee',middleware.authenticateToken,loginmodule.updateEmployee);
router.post('/updatepost',middleware.authenticateToken,postmodule.savePost);
//----------------------------connection------------------

router.post('/findfriend',connectionmodule.findFriends);
router.post('/addfriend',middleware.authenticateToken,connectionmodule.findIdfromemail,connectionmodule.addfriend);
router.post('/find',connectionmodule.viewFriends);

module.exports=router;

//middleware.authenticateToken,