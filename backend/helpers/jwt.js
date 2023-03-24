const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET || "development"

/**
 * Hash Password use bcrypt
 * @param {string} payload
 * @returns {string} token 
 */
function signToken (payload) {
    return jwt.sign(payload, JWT_SECRET)
}
/**
 * Hash Password use bcrypt
 * @param {string} token
 * @returns {object} payload 
 */
function verifyToken (token) {
    return jwt.verify(token, JWT_SECRET)
}


module.exports = {
    signToken,
    verifyToken
}