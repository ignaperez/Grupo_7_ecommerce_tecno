//Requires
const express = require('express');
const path = require('path');
const app = express();
const mainRouter = require('./src/routes/mainRouter');

//Configuración
app.use(express.static(path.resolve(__dirname,'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'./src/views'));

//RUTA
app.use('/',mainRouter);

//SERVIDOR
app.listen(2000, () => {console.log('Servidor corriendo en el puerto 2000');})
