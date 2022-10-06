//Requires
const express = require('express');
const path = require('path');
const app = express();
const mainRouter = require('./src/routes/mainRouter');
const productRouter = require('./src/routes/productRouter');
const usersRouter = require('./src/routes/userRouter');

//Configuración
app.use(express.static(path.resolve(__dirname,'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'./src/views'));

//RUTA
app.use('/',mainRouter);
app.use("/users", usersRouter)
app.use("/product", productRouter )
app.get('/', (req, res) => {
    res.send('Servidor funcionando')
});

//SERVIDOR
app.listen(2000, () => {console.log('Servidor corriendo en el puerto 2000');})
/*
app.get('/', (req,res) => {

    res.sendFile(path.resolve(__dirname, 'src/views/index.html'))
    
});

app.get("/login", (req,res) => {
    res.sendFile(path.resolve(__dirname, "src/views/login.html"))
})

app.get("/registro", (req,res) => {
    res.sendFile(path.resolve(__dirname, "src/views/registro.html"))
})

app.get("/carrito", (req,res) => {
    res.sendFile(path.resolve(__dirname, "src/views/carrito.html"))
})

app.get("/detalle-producto-auriculares", (req,res) => {
   
        res.sendFile(path.resolve(__dirname, "src/views/detalle-producto-auriculares.html"))
})
app.get("/detalle-producto-mouse", (req,res) => {
    res.sendFile(path.resolve(__dirname, "src/views/detalle-producto-mouse.html"))
})
app.get("/detalle-producto-teclado", (req,res) => {
    res.sendFile(path.resolve(__dirname, "src/views/detalle-producto-teclado.html"))
})
app.get("/detalle-producto-mousepad", (req,res) => {
    res.sendFile(path.resolve(__dirname, "src/views/detalle-producto-mousepad.html"))
})
app.get("/ayuda", (req,res) => {
    res.sendFile(path.resolve(__dirname, "src/views/ayuda.html"))
})
*/