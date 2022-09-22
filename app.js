const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.resolve(__dirname,'public')));

app.listen(2000, () => {

    console.log('Servidor corriendo en el puerto 2000');
    
})

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

app.get("/carrito2", (req,res) => {
    res.sendFile(path.resolve(__dirname, "src/views/carrito2.html"))
})