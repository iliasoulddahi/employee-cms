const router = require('express').Router()
const EmployeeController = null
router.get('/', EmployeeController.findEmployee)
router.get('/:id', EmployeeController.findEmployeeById)
router.post('/:id', EmployeeController.createEmployee)
router.put('/:id', EmployeeController.updateEmployee)
router.patch('/:id', EmployeeController.updateEmployeeStatus)
router.delete('/:id', EmployeeController.deleteEmployee)

module.exports = router