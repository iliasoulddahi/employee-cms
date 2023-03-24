const AuthController = require('../controllers/auth.controller')
const authenticationMiddleware = require('../middlewares/authentication.middleware')
const authorizationSuperAdminMiddleware = require('../middlewares/authorizationSuperAdmin.middleware')

const router = require('express').Router()

router.post('/login', AuthController.login)
router.post('/register-admin',authenticationMiddleware, authorizationSuperAdminMiddleware ,AuthController.registerAdmin)

module.exports = router