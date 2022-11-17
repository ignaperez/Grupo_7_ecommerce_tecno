module.exports = (req, res, next) => {
    let user = req.session.user;
    if(user == null || user.categoria == "user" ) {
        return res.redirect("/")
    } 
    next()
} 