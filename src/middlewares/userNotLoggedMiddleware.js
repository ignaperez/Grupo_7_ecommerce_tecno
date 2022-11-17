module.exports = (req, res, next) => {
    if(req.session.user == null) {
        return res.redirect("/users/login")
    }
    next()
}