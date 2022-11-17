//Requires
const express = require('express');
const path = require('path');
const app = express();
const methodOverride =  require('method-override');
const mainRouter = require('./src/routes/mainRouter');
const productRouter = require('./src/routes/productRouter');
const usersRouter = require('./src/routes/userRouter');
const session = require('express-session');
const loggedMiddleware = require("./src/middlewares/loggedMiddleware");
const cookies = require("cookie-parser");

//Configuración
app.use(express.static(path.resolve(__dirname,'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'./src/views'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(session ( {
    secret: "secret",
    resave: false,
    saveUninitialized: true}));
app.use(cookies())


app.use(loggedMiddleware)

//RUTAS
app.use('/',mainRouter);
app.use("/users", usersRouter)
app.use("/product", productRouter )
app.get('/', (req, res) => {
    res.send('Servidor funcionando')
});

//SERVIDOR
//app.listen(2000, () => {console.log('Servidor corriendo en el puerto 2000');})
app.listen(process.env.PORT || 2000
    , ()=>{
    console.log('Servidor funcionando en puerto 2000');
});