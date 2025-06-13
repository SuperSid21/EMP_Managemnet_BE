const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { getEmployees, createEmployee, updateEmployee, deleteEmployee } = require('../controllers/employeeController');

router.use(authMiddleware);
router.get('/', getEmployees);
router.post('/', createEmployee);
router.put('/:id', updateEmployee);
router.delete('/:id', deleteEmployee);

module.exports = router;