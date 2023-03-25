module.exports = async (req, res, next) => {
    try {
        const role = req.user.role
        const isAllow = role === "admin" || role === "superadmin"
        if(!isAllow){
            throw{
                name: "Forbidden"
            }
        }

        next()
    } catch (err) {
        console.log('>>>>>>>>>', 'errrrrrrrrrrrrrrrrrrrrrrorss')
        next(err)
    }
}