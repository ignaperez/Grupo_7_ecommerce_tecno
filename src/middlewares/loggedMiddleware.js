const fs = require("fs");
const path = require("path");
const userFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));

 loggedMiddleware = (req, res, next) => {
    res.locals.isLogged = false;
    
    
    let userInCookie = req.cookies.cookieEmail;
    var userFromCookie = users.find(user => user.email == userInCookie)
    
    if(userFromCookie) {
        req.session.user = userFromCookie
    }
    
    
    if(req.session && req.session.user) {
        res.locals.isLogged = true;
        res.locals.user = req.session.user
    }
    next();
}

module.exports = loggedMiddleware