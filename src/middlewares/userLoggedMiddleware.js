module.exports = (req, res, next) => {
    if(req.session.user) {
        console.log("ACA LLEGO - usuario logueado");
        return res.redirect("/users/profile")
    }
    next()
}