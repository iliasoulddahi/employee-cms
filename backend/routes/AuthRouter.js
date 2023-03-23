const router = require('express').Router()
const AuthController = null

router.post('/login', AuthController.login)
router.post('/registration', AuthController.registration)

module.exports = router