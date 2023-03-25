const router = require('express').Router()
const employeeRouter = require('./EmployeeRouter')
const authRouter = require('./AuthRouter')

router.use('/auth', authRouter)
router.use('/employee', employeeRouter)

module.exports = router