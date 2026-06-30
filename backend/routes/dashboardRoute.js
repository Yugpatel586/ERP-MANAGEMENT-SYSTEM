const express = require('express');

//Middlewares
const { authMiddleware } = require('../middleware/authMiddleware')
const { checkAdmin } = require('../middleware/checkAdmin')

//Controllers
const router = express.Router();


//dashboard routes
const { fetchApprovedLeaveCount } = require('../controllers/dashboard/fetchApprovedLeaveCount');
const { fetchPendingLeaveCount } = require('../controllers/dashboard/fetchPendingLeaveCount');
const { fetchRejectedLeaveCount } = require('../controllers/dashboard/fetchRejectedLeaveCount');
const { fetchEmployeeCount } = require('../controllers/dashboard/fetchEmpoyeeCount');
const { fetchDepartmentCount } = require('../controllers/dashboard/fetchDepartmentCount');
const { salaryToBePaid } = require('../controllers/dashboard/totalSalaryToBePaid');

router.get('/fetchapprovedleavescount', authMiddleware, fetchApprovedLeaveCount);
router.get('/fetchpendingleavescount', authMiddleware, fetchPendingLeaveCount);
router.get('/fetchrejectedleavescount', authMiddleware, fetchRejectedLeaveCount);
router.get('/fetchemployeecount', authMiddleware, fetchEmployeeCount);
router.get('/fetchdepartmentcount', authMiddleware, fetchDepartmentCount);
router.get('/totalsalary', authMiddleware, salaryToBePaid);

module.exports = router;
