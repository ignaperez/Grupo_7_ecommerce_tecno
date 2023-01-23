window.addEventListener("load", () => {
    let botonComprar = document.querySelectorAll(".añadir-carrito");
    let botonComprarDetalle = document.querySelector(".boton-comprar");
    if(botonComprar.length > 0){
    botonComprar.forEach((boton) => {
        boton.addEventListener("click", (e) => {
            if (localStorage.carrito) {
                let carrito = JSON.parse(localStorage.carrito)
                let index = carrito.findIndex(producto => producto.id == e.target.dataset.id)

                if(index != -1){
                    carrito[index].cantidad = carrito[index].cantidad + 1;
                } else {
                    carrito.push({ id: e.target.dataset.id, cantidad: 1 })
                }
                localStorage.setItem("carrito", JSON.stringify(carrito))
        } else {
                localStorage.setItem("carrito", JSON.stringify([{ id: e.target.dataset.id, cantidad: 1 }]))
            }
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Producto agregado al carrito',
                showConfirmButton: false,
                timer: 1000
              })

        })
    })} else {
        botonComprarDetalle.addEventListener("click", (e) => {
            
            if (localStorage.carrito) {
                let carrito = JSON.parse(localStorage.carrito)
                let index = carrito.findIndex(producto => producto.id == e.target.dataset.id)
                
                if(index != -1){
                    carrito[index].cantidad = carrito[index].cantidad + 1;
                } else {
                    carrito.push({ id: e.target.dataset.id, cantidad: 1})
                }
                localStorage.setItem("carrito", JSON.stringify(carrito))
        } else {
                localStorage.setItem("carrito", JSON.stringify([{ id: e.target.dataset.id, cantidad: 1}]))
            }
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Producto agregado al carrito',
                showConfirmButton: false,
                timer: 1000
              })
        })
    }
})