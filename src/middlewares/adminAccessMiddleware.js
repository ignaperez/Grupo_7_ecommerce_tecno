module.exports = (req, res, next) => {
    let user = req.session.user;
    console.log("ESTE ES EL REQ:SESSION categoira: " + user.categoria)
    if(user == null || user.categoria == 2 ) {
        return res.redirect("/")
    } 
    next()
} 