const router = require('express').Router()
const employeeRouter = require('./EmployeeRouter')
const authRouter = require('./AuthRouter')

router.use('/auth', authRouter)
router.use('/employee', employeeRouter)
router.get('/', (req,res)=>res.send('server online'))

module.exports = router