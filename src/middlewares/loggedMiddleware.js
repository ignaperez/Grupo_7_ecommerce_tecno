const fs = require("fs");
const path = require("path");
//const userFilePath = path.join(__dirname, '../data/users.json');
//const users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
const db = require('../database/models/')
 loggedMiddleware = (req, res, next) => {
    res.locals.isLogged = false;
    
    
    let userInCookie = req.cookies.cookieEmail;
    if(userInCookie){
        //console.log(userInCookie)
   // var userFromCookie = users.find(user => user.email == userInCookie)
    async()=>{
        try {
            
            const userFromCookie =  await db.Usuario.findOne({
                where:{
                    email:{userInCookie}
                }})
                console.log('userFromCookie')
                
            if(userFromCookie) {
                    req.session.user = userFromCookie
                    
                }
        } catch (error) {
            console.log(error)
        }
        

    }
    
    
    
    }
    if(req.session && req.session.user) {
        res.locals.isLogged = true;
        res.locals.user = req.session.user
    }
    

   
    next();
}

module.exports = loggedMiddleware