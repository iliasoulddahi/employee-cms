module.exports = async (req, res, next) => {
    try {
        const role = req.user.role
        console.log('>>>>>>>>>', role)
        const isAllow = role === "admin" || role === "superadmin"
        if(!isAllow){
            throw{
                name: "Forbidden"
            }
        }

        next()
    } catch (err) {
        next(err)
    }
}