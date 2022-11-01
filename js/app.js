let boton = document.getElementById("bt")

function juego() {

    let dinero = document.getElementById("pl").value
    dinero = parseInt(dinero)
    let repetir = document.getElementById("vj").value
    repetir = parseInt(repetir)
    let moneda = document.getElementById("op").value
    let aleatorio = 1 + (Math.random() * 2)

    do {

        if (moneda == aleatorio) {
            cont = cont + 1
            total += dinero + dinero
            System.out.println(`Excelente has ganado la cantidad de dinero que llevas en este momento es ${total}`)
        } else {
            cont = cont + 1
            total = plata - plata
            Swal.fire(`Lastima perdistes la cantidad de dinero que llevas en este momento es ${total}`)
        }
        if (total == 0) {
            Swal.fire("Si quieres seguir jugando selecciona 1, si quieres salir selecciona 2: ")
        } else {
            Swal.fire("Si quieres seguir jugando selecciona 1, si quieres salir selecciona 2: ")
        }

    } 
    
    while (continuar != 2)

    Swal.fire(`El dinero que ganaste jugando fue ${total} y la cantidad de partidas que jugaste fue ${cont}`)

}

boton.addEventListener('click', juego)