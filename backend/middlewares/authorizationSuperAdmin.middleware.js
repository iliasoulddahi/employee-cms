module.exports = async (req, res, next) => {
    try {
        const role = req.user.role
        if(role !== "superadmin"){
            throw{
                name: "Forbidden"
            }
        }

        next()
    } catch (err) {
        next(err)
    }
}