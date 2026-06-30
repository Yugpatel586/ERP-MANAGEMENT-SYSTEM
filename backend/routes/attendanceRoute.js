const express = require('express');

//Middlewares
const { authMiddleware } = require('../middleware/authMiddleware')
const { checkAdmin } = require('../middleware/checkAdmin')

//Controllers
const router = express.Router();


//attendance routes 
const { markAttendance } = require('../controllers/attendence/markAttendence');
const { fetchAttendance } = require('../controllers/attendence/fetchAttendance');

router.post('/markattendance', authMiddleware,checkAdmin, markAttendance);
router.get('/fetchattendance/:employeeId', authMiddleware, fetchAttendance);

module.exports = router;
