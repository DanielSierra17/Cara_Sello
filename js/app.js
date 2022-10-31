let boton = document.getElementById("bt")

function juego() {

    let dinero = document.getElementById("pl").value
    dinero = parseInt(dinero)
    let repetir = document.getElementById("vj").value
    repetir = parseInt(repetir)
    let moneda = document.getElementById("op").value
    let aleatorio = 1 + (Math.random() * 2)

    for (i = 1; i <= repetir; i++) {

        if (moneda == aleatorio) {
            let total = dinero + dinero
            Swal.fire(`Felicitaciones has ganado, el dinero que llevas en este momento es ${total}`)
        }

        else {
            total = dinero - dinero
            Swal.fire(`Lastima has perdido, el dinero que llevas en este momento es ${total}`)
        }

        Swal.fire(`El dinero que ganaste jugando fue ${total} y jugaste ${i} veces`)

    }

}

boton.addEventListener('click', juego)