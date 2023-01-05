window.addEventListener("load", () => {
    const carousel = document.querySelectorAll(".carousel");
    const flechaIzquierda = document.querySelectorAll(".flecha-izquierda");
    const flechaDerecha = document.querySelectorAll(".flecha-derecha");
        //carousel 1
        flechaDerecha[0].addEventListener("click", () => {
            carousel[0].style.transform += "translateX(-10%)"
        })

        flechaIzquierda[0].addEventListener("click", () => {
            carousel[0].style.transform = "translateX(0%)"
        })
        //carousel 2
        flechaDerecha[1].addEventListener("click", () => {
            carousel[1].style.transform += "translateX(-10%)"
        })

        flechaIzquierda[1].addEventListener("click", () => {
            carousel[1].style.transform = "translateX(0%)"
        })
        //carousel 3
        flechaDerecha[2].addEventListener("click", () => {
            carousel[2].style.transform += "translateX(-10%)"
        })

        flechaIzquierda[2].addEventListener("click", () => {
            carousel[2].style.transform = "translateX(0%)"
        })
        //carousel 4
        flechaDerecha[3].addEventListener("click", () => {
            carousel[3].style.transform += "translateX(-10%)"
        })

        flechaIzquierda[3].addEventListener("click", () => {
            carousel[3].style.transform = "translateX(0%)"
        })
        
    
})