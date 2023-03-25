const b =  require("bcrypt")

/**
 * Hash Password use bcrypt
 * @param {string} Unhashed Password
 * @returns {string} Hashed Password
 */
function hashPassword (password) {
    return b.hashSync(password, 12)
}
/**
 * Validate Password
 * @param {string} password
 * @param {string} hash
 * @return {boolean} valid or invalid.
 */
function comparePassword (password , hash) {
    return b.compareSync(password, hash)
}

module.exports = {
    hashPassword,
    comparePassword
}