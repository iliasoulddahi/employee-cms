const router = require('express').Router()
const EmployeeController = require('../controllers/employee.controller')
const authenticationMiddleware = require('../middlewares/authentication.middleware')
const authorizationMiddleware = require('../middlewares/authorization.middleware')
const authorizationSuperAdminMiddleware = require('../middlewares/authorizationSuperAdmin.middleware')

router.use(authenticationMiddleware)
router.get('/', authorizationMiddleware ,EmployeeController.findEmployee)
router.get('/:id', authorizationMiddleware, EmployeeController.findEmployeeById)
router.post('/', authorizationMiddleware, EmployeeController.createEmployee)
router.put('/:id', authorizationMiddleware, EmployeeController.updateEmployee)
router.patch('/:id', authorizationMiddleware, EmployeeController.updateEmployeeStatus)
router.delete('/:id',authorizationSuperAdminMiddleware ,EmployeeController.deleteEmployee)

module.exports = router