const { verifyToken } = require('../helpers/jwt')
const { User } = require('../models')
/**
 * check authentication token before access endpoint  
 */
module.exports = async (req, res , next) => {
    try {
        const {token} = req.headers
        // check token existing
        if(!token){
            throw {
                name:"Unauthenticated"
            }
        }
        // check token
        const payload = verifyToken(token)
        
        //check userdata
        const user = await User.findByPk(payload.id)
        if(!user) {
            throw {
                name:"Unauthenticated"
            }
        }

        req.user = {
            id:user.id,
            role:user.role,
            email:user.email
        }
        next()  
          
    } catch (err) {
        console.log('>>>>>>>>>', 'errrrrrrrrrrrrrrrrrrrrrrorss di auth')
        next(err)
    }
}