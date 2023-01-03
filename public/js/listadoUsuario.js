window.addEventListener("load", function () {
    let botonEliminar = document.querySelectorAll("#borrar")
    for (const boton of botonEliminar) {
        boton.addEventListener("click", (e) => {
            e.preventDefault()
            console.log(boton);
             Swal.fire({
                 icon: "warning",
                 title:"¿Quieres eliminar este usuario?",
                 showConfirmButton: true,
                 confirmButtonText:"Si",
                 showCancelButton: true,
                 cancelButtonText: "No",
                 allowOutsideClick: false,
                 allowEscapeKey: false,
                 allowEnterKey: false,
                 iconColor: "tomato",
                 confirmButtonColor:"#55603d"
             }).then(result => {
                 if(result.value == true) { 
                    boton.submit()
                 } else {
                     e.preventDefault()
                 }
             })
        })
    }
})