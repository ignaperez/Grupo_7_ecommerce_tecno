window.addEventListener("load", function () {
    let boton = document.querySelector(".boton-dropdown")
    let lista = document.querySelector(".dropdown-lista")
    if(boton){
    boton.addEventListener("click", () => {
        lista.classList.toggle("mostrar")
    })
    }
})