window.addEventListener("load", () => {
    function setCarritoVacio() {
        cartRows.innerHTML = `
        <tr>
            <td colspan="5"><div class="alert-warning">No tienes productos en el carrito</div></td>
        </tr>`
    }

    function vaciarCarrito() {
        localStorage.removeItem("carrito")
    }

    function calcularTotal(productos) {
        return productos.reduce( (acum, producto) =>  acum += producto.precio * producto.cantidad, 0);
    }

    let cartRows = document.querySelector(".cartRows")
    if (localStorage.carrito) {
        let carrito = JSON.parse(localStorage.carrito)
        let productos = []
        carrito.forEach((item, i) => {
            fetch(`/apiProduct/${item.id}`)
                .then(res => res.json())
                .then(producto => {
                    if(producto){
                    cartRows.innerHTML += `
                            <tr id="row${i}">
                        <td class="tBody">${producto.data.titulo}</td>
                        <td class="tBody">${producto.data.garantia} Meses</td>
                        <td class="tBody">${item.cantidad}</td>
                        <td class="tBody">$${producto.data.precio}</td>
                        <td><button class="boton-eliminar" id="${i}"><i class="fa-solid fa-trash"></i></button></td>
                            </tr>`
                    productos.push({precio: producto.data.precio, cantidad: item.cantidad})
                    console.log(productos)                      
                } else {
                    carrito.splice(i, 1)
                    localStorage.setItem("carrito", JSON.stringify(carrito))
                }}).then(() => {
                    document.querySelector(".valor").innerText = `Total: $${calcularTotal(productos)}`
                })
                

        });
    } else {
        setCarritoVacio()
    }
})