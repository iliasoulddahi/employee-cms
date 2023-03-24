const { comparePassword } = require('../helpers/bcrypt')
const { signToken } = require('../helpers/jwt')
const { User } = require('../models')
class AuthController {

    /**
    * Login response access token to client
    */
    static async login(req, res, next) {
        try {
          const { email, password } = req.body
    
          const user = await User.findOne({
            where: {
              email,
            },
          })
    
          const err = {
            name: 'InvalidCredentials'
          }
    
          if (!user) throw err
    
          const isValid = comparePassword(password, user.password)
          if (!isValid) throw err
    
          const { id, role, username } = user
    
          const token = signToken({ id, role, username, email })
    
          res.status(200).json({ token })
        } catch (error) {
          next(error)
        }
      }
      
      /**
      * Login response access token to client
      */
      static async registerAdmin(req, res, next) {
        const { name, email, password, gender,phone } = req.body

        try {
            const inserted = await User.create({ name, email, password, gender ,phone, role: "admin" })
            res.status(201).json({
                id: inserted.id,
                email: inserted.email
            })
        } catch (err) {
            next(err)
        }
    }
}
module.exports = AuthController