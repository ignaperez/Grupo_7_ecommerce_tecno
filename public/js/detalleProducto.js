window.addEventListener("load", function()  {
    imagenGrande = document.querySelector(".img-principal")
    imagenes = document.querySelectorAll(".img-secundaria")
    console.log(imagenGrande);
    console.log(imagenes);

    for (const imagen of imagenes) {
        imagen.addEventListener("click", () => {
            imagenGrande.innerHTML = imagen
        })
    }
    
})