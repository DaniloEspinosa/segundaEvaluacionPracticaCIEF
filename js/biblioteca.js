// Pon aquí tu nombre : Danilo Patricio, Espinosa

// Solo he utilizado este metodo para hacer las pruebas
// Lo dejo comentado, por lo que ahora no borrara el item del localstorage al iniciar el programa
// localStorage.removeItem("biblioteca")


// MINI BIBLIOTECA
// Al iniciar el programa daremos a elegir entre cargar el archivo del local storage, si este no existe utilizaremos el array
const biblioteca = JSON.parse(localStorage.getItem("biblioteca")) || [
    { titulo: "Guerra y Paz", autor: "Lev Tolstoi", categoria: "drama", idioma: "español", epoca: "s.XIX" },
    { titulo: "Anna Karenina", autor: "Lev Tolstoi", categoria: "drama", idioma: "català", epoca: "s.XIX" },
    { titulo: "L'Odisea", autor: "Homero", categoria: "drama", idioma: "català", epoca: "clásica" },
    { titulo: "Antologia de la poesia medieval catalàna", autor: "Diversos", categoria: "poesia", idioma: "català", epoca: "clásica" },
    { titulo: "La Ilíada", autor: "Homero", categoria: "drama", idioma: "español", epoca: "clásica" },
    { titulo: "Poema del Mio Cid", autor: "Anónimo", categoria: "poesia", idioma: "español", epoca: "clásica" },
    { titulo: "Veinte mil leguas de viaje submarino", autor: "Jules Verne", categoria: "aventuras", idioma: "español", epoca: "s.XIX" },
    { titulo: "De la Terra a la Lluna", autor: "Jules Verne", categoria: "aventuras", idioma: "català", epoca: "s.XIX" },
    { titulo: "Cinco semanas en globo", autor: "Jules Verne", categoria: "aventuras", idioma: "español", epoca: "s.XIX" },
    { titulo: "Robinson Crusoe", autor: "Daniel Defoe", categoria: "aventuras", idioma: "català", epoca: "clásica" },
    { titulo: "Germinal", autor: 'Émile Zola', categoria: "drama", idioma: "español", epoca: "s.XIX" },
    { titulo: "Notre Dame de Paris", autor: 'Victor Hugo', categoria: "drama", idioma: "català", epoca: "s.XIX" },
    { titulo: "Los Miserables", autor: 'Victor Hugo', categoria: "drama", idioma: "español", epoca: "s.XIX" },
    { titulo: "Yo, robot", autor: "Isaac Asimov", categoria: "ciencia-ficción", idioma: "español", epoca: "s.XX" },
    { titulo: "Fundació", autor: "Isaac Asimov", categoria: "ciencia-ficción", idioma: "català", epoca: "s.XX" },
    { titulo: "Ciberiada", autor: "Stanislaw Lem", categoria: "ciencia-ficción", idioma: "español", epoca: "s.XX" },
    { titulo: "Solaris", autor: "Stanislaw Lem", categoria: "ciencia-ficción", idioma: "català", epoca: "s.XX" },
    { titulo: "El hombre bicentenario", autor: "Isaac Asimov", categoria: "ciencia-ficción", idioma: "español", epoca: "s.XX" },
    { titulo: "Tokio Blues", autor: "Haruki Murakami", categoria: "drama", idioma: "español", epoca: "s.XX" },
    { titulo: "Romancero Gitano", autor: "Federico García Lorca", categoria: "poesia", idioma: "español", epoca: "s.XX" },
    { titulo: "Los aventuras de Sherlock Holmes", autor: 'Arthur Conan Doyle', categoria: "misterio", idioma: "español", epoca: "s.XIX" },
    { titulo: "Rebelió a la granja", autor: 'George Orwell', categoria: "drama", idioma: "català", epoca: "s.XX" },
    { titulo: "La Divina Comedia", autor: "Dante Alighieri", categoria: "drama", idioma: "español", epoca: "clásica" },
    { titulo: "Fahrenheit 451", autor: "Ray Bradbury", categoria: "ciencia-ficción", idioma: "català", epoca: "s.XX" },
    { titulo: "Cròniques Marcianes", autor: "Ray Bradbury", categoria: "ciencia-ficción", idioma: "català", epoca: "s.XX" },
]


// ==========================================================================================================
// EJERCICIO 1
// Libros disponibleS
// Mostrar la lista de obras alfabéticamente según el título, en forma de lista ordenada

// Llista del llibres


// Captura del elemento donde insertaré el listado ordenado por títulos
const listaLibros = document.getElementById("listaLibros")


//Defino una función para crear una lista ordenada de los títulos con el array dado y luego insertarlo en la página web
function mostrarOrdenadoPorTitulo(array) {
    // Ordenando el array alfabéticamente según su titulo
    biblioteca.sort(function (a, b) {
        return a.titulo.localeCompare(b.titulo, "es-ES")
    })

    // Variable que sera insertada en el documento, la inicializo con <ol> para obtener el listado numerado
    let mostrarHtml = "<ol>"

    // Itero sobre el array ya ordenado y recupero solo los titulos
    for (let i = 0; i < array.length; i++) {
        // Cada elemento iterado se va concatenando al la variable creada al principio
        mostrarHtml += `<li>${array[i].titulo}</li>`
    }
    // Por ultimo agrego la etiqueta de cierre en la variable
    mostrarHtml += "</ol>"
    // console.log(mostrarHtml)

    // Inserto la variable en el documento html para que el listado sea mostrado en la página web
    listaLibros.innerHTML = mostrarHtml

}

// Ejecucion de la funcion con el array dado
mostrarOrdenadoPorTitulo(biblioteca)


// ==========================================================================================================
// EJERCICIO 2
// Filtrar las obras según los criterios indicados en el formulario.
// Las obras que cumplan las condiciones se mostrarán dentro del div con id salidaFiltrada
// Las obras se mostrarán según aparece en la imagen modelo1.png
// Hay que aplicar algunos estilos que ya están definidos en el css

// Captura del formulario
const formFiltrado = document.getElementById("form-filtrado")
// Captura del elemento donde se mostrará el resultado
const salidaFiltrada = document.getElementById("salidaFiltrada")
// Captura de los input por nombre
const radioCategoria = document.getElementsByName("categoria")
const radioIdioma = document.getElementsByName("idioma")
const radioEpoca = document.getElementsByName("epoca")

// Le agrego un evento change al formulario para poder obtener el resultado en cada cambio
formFiltrado.addEventListener("change", (e) => {
    // Con este metodo evito los comportamientos predeterminados
    e.preventDefault()

    // Defino las variables que utilizare para recuperar los radio checked
    let categoria = ""
    let idioma = ""
    let epoca = ""
    let sugeridos = ""

    // Bucles que identificarar el radio checked y asiganaran el valor a las variables
    for (let i = 0; i < radioCategoria.length; i++) {
        if (radioCategoria[i].checked) {
            categoria = radioCategoria[i].value
            break
        }
    }
    for (let i = 0; i < radioIdioma.length; i++) {
        if (radioIdioma[i].checked) {
            idioma = radioIdioma[i].value
            break
        }
    }
    for (let i = 0; i < radioEpoca.length; i++) {
        if (radioEpoca[i].checked) {
            epoca = radioEpoca[i].value
            break
        }
    }

    // Una vez tengo las variables utilizo un foreach para recorrer el array y poder comparar
    biblioteca.forEach(item => {
        // Con este condicional identificare las obras que sus valores coincidan con los input seleccionados
        if (item.categoria == categoria && item.idioma == idioma && item.epoca == epoca) {
            // Cuando una obra coincida agregare al string una linea previamente formateada con los datos indicados
            // utilizando literal string para poder agregar los valores variables obtenidos
            sugeridos += `<p><span class="autor">${item.autor}</span> : <span class="obra">${item.titulo}</span> (${item.categoria}), ${item.idioma}</p>`
        }
    })

    // En caso que no haya ninguna coincidencia el mensaje sera el siguiente
    if (sugeridos === "") {
        sugeridos = "<p>No hay obras con estas caracteristicas<p>"
    }

    // Envio el mensaje al html, que luego se mostrara en la pagina con el formato correcto
    salidaFiltrada.innerHTML = sugeridos


})

// ==========================================================================================================
// EJERCICIO 3
// Filtrar por autor
// Selección de obras según el nombre o parte del nombre de un autor.
// Al hacer clic sobre el botón buscar se mostrarán las obras cuyos autores cumplen los requisitos.
// La salida por pantalla será en este formato:
// Isaac Asimov : Yo, robot (ciencia-ficción, idioma : español, época : s.XX)

/*

// Capturo el formulario y el apartado donde se inyectara el codigo html
const formAutor = document.getElementById("form-autor")
const salidaAutor = document.getElementById("salidaAutor")

// Agrego un evento submit al formulario para que se ejecute al hacer click en el boton enviar
formAutor.addEventListener("submit", (e) => {
    //Variable en la que se guardaran los elementos encontrados
    let respuestaHtml = ""
    // Con este metodo evito los comportamientos predeterminados
    e.preventDefault()

    // Declaro la variable y le asigno el valor del input convertido a minusculas
    let respuestaUsuario = formAutor[0].value.toLowerCase()
    // Agrego un condicional para indicar que el campo ha quedado vacio en caso que asi fuera
    if (respuestaUsuario.trim() == "") {
        respuestaHtml = "<p>El campo esta vacío, escribe algo antes de buscar.</p>"
        // Agrego el mensaje a la página y con el return terminamos la ejecucion de la función ya que si esta condición se cumple no tiene sentido continuar.
        salidaAutor.innerHTML = respuestaHtml
        return
    }

    // Iteramos con un foreach sobre el array
    biblioteca.forEach(obra => {
        // En este condicional decimos que si lo que ha buscado el usuario esta presente en el nombre del autor(tambien pasado a minúsculas)
        // Lo agregara a la variable respuestaHtml con el formato de salida indicado, para lograr esto utilizo literal string
        if (obra.autor.toLowerCase().includes(respuestaUsuario)) {
            respuestaHtml += `<p><span class="autor">${obra.autor}</span> : <span class="obra">${obra.titulo}</span> (${obra.categoria}, idioma: ${obra.idioma}, época: ${obra.epoca})</p>`
        }
    })

    // Envio el mensaje al html que luego sera mostrado en la página
    salidaAutor.innerHTML = respuestaHtml

})

*/

// ==========================================================================================================
// EJERCICIO 4
// Añadir obra a la biblioteca
// A partir del formulario, añadir obras a la biblioteca
// Conseguir permanencia con LocalStorage
// Actualizar automáticamente el listado de obras del ejercicio 1



// Recupero el formulario para obtener luego los valores de los input
const incluirObra = document.getElementById("incluirObra")

// Añado un event listener tipo submit para poder agregar las nuevas obras
incluirObra.addEventListener("submit", (e) => {
    // Creo un objeto vacío que representara la nueva obra
    let nuevaObra = {}
    e.preventDefault()

    // Agrego los valores al nuevo objeto obtenidos desde los campos rellenados en el formulario
    nuevaObra.titulo = incluirObra[1].value
    nuevaObra.autor = incluirObra[2].value
    nuevaObra.categoria = incluirObra[3].value
    nuevaObra.idioma = incluirObra[4].value
    nuevaObra.epoca = incluirObra[5].value

    // Envio el nuevo objeto creado al array biblioteca
    biblioteca.push(nuevaObra)

    // Nuevamente ejecuto la funcion que ordenara el array y ademas mostrara los resultados en la página
    mostrarOrdenadoPorTitulo(biblioteca)

    // Agregar al local storage el array, debe ser pasado como un formato JSON
    localStorage.setItem("biblioteca", JSON.stringify(biblioteca))


})



// ==========================================================================================================
// EJERCICIO 5
//  * Añadir un campo "apellido" para separarlo del campo "nombre", actualmente juntos en la colección de obras.
//    Utilizar ese campo apellido en el ejercicio 3 (para la búsqueda) y en el ejercicio 4 (para la inclusión de más obras).
//    La salida por pantalla en el ejercicio 3 sería así, por ejemplo:
//    Asimov, Isaac : Yo, robot (ciencia-ficción, idioma : español, época : s.XX)
//    Los autores se mostrarán en orden alfabético descendente (de la A a la Z) según su apellido


// Funcion para separar apellido del nombre y devolver un nuevo array con los campos
function agregarApellido(array) {
    // Defino un nuevo array para hacer el return
    let nuevoArray = []

    // recorrer el array para poder separar dividir autor en nombre y apellido
    array.forEach(item => {

        // Separar el autor en un array
        let separarApellido = item.autor.split(" ")
        // Defino la variable nueva para el apellido
        let apellido = ""
        // Defino un nuevo objeto vacio
        let obra = {}

        // Variable que solo contendra el nombre
        let nombre = separarApellido[0]

        // Asigno los valores al nuevo objeto
        obra.titulo = `${item.titulo}`
        obra.nombre = `${nombre}`
        if (separarApellido.length > 1) {
            apellido = separarApellido.slice(1).toString().replace(",", " ")
            obra.apellido = `${apellido}, `
        }
        obra.categoria = `${item.categoria}`
        obra.idioma = `${item.idioma}`
        obra.epoca = `${item.epoca}`


        // Envio cada nuevo objeto al array
        nuevoArray.push(obra)
    })
    // Devuelvo el nuevo array
    return nuevoArray
}

let biblioteca2 = agregarApellido(biblioteca)


// Capturo el formulario y el apartado donde se inyectara el codigo html
const formAutor = document.getElementById("form-autor")
const salidaAutor = document.getElementById("salidaAutor")

// Agrego un evento submit al formulario para que se ejecute al hacer click en el boton enviar
formAutor.addEventListener("submit", (e) => {
    //Variable en la que se guardaran los elementos encontrados
    let respuestaHtml = ""
    // Con este metodo evito los comportamientos predeterminados
    e.preventDefault()

    // Declaro la variable y le asigno el valor del input convertido a minusculas
    let respuestaUsuario = formAutor[0].value.toLowerCase()
    // Agrego un condicional para indicar que el campo ha quedado vacio en caso que asi fuera
    if (respuestaUsuario.trim() == "") {
        respuestaHtml = "<p>El campo esta vacío, escribe algo antes de buscar.</p>"
        // Agrego el mensaje a la página y con el return terminamos la ejecucion de la función ya que si esta condición se cumple no tiene sentido continuar.
        salidaAutor.innerHTML = respuestaHtml
        return
    }

    // Iteramos con un foreach sobre el array
    biblioteca2.forEach(obra => {
        // En este condicional decimos que si lo que ha buscado el usuario esta presente en el nombre del autor(tambien pasado a minúsculas)
        // Lo agregara a la variable respuestaHtml con el formato de salida indicado, para lograr esto utilizo literal string
        console.log(obra.nombre)
        if (obra.apellido) {
            if (obra.apellido.toLowerCase().includes(respuestaUsuario)) {
                respuestaHtml += `<p><span class="autor">${obra.nombre} ${obra.apellido}</span> : <span class="obra">${obra.titulo}</span> (${obra.categoria}, idioma: ${obra.idioma}, época: ${obra.epoca})</p>`
            }
        }
    })

    // Envio el mensaje al html que luego sera mostrado en la página
    salidaAutor.innerHTML = respuestaHtml

})