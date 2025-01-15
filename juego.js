const preguntas = [
    {
        pregunta: "¿Quién pintó 'La noche estrellada'?",
        opciones: ["Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
        respuestaCorrecta: 0,
        imagen: "imagenes/noche-estrellada.jpg"
    },
    {
        pregunta: "¿Qué estilo artístico es conocido por el uso de colores brillantes y formas abstractas?",
        opciones: ["Impresionismo", "Cubismo", "Surrealismo"],
        respuestaCorrecta: 1,
        imagen: "imagenes/cubismo.jpg"
    },
    {
        pregunta: "¿Qué obra es esta? Escucha el audio y elige la respuesta correcta.",
        opciones: ["La Monalisa", "La Odisea", "La Sinfonía de las Sirenas"],
        respuestaCorrecta: 0,
        imagen: "imagenes/icono.png",
        audio: "musica/Pregunta03.mp4" // Ruta del audio
    }
];

let puntaje = 0;
let preguntaActual = 0;
let respuestasSeleccionadas = []; // Array para almacenar las respuestas seleccionadas

document.getElementById("comenzar").addEventListener("click", function() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("pregunta").style.display = "block";
    mostrarPregunta();
    document.getElementById("sonido-fondo").play();
});

function mostrarPregunta() {
    const pregunta = preguntas[preguntaActual];
    document.getElementById("texto-pregunta").innerText = pregunta.pregunta;
    const opcionesDiv = document.getElementById("opciones");
    opcionesDiv.innerHTML = ""; // Limpiar opciones anteriores

    // Mostrar la imagen de la pregunta si existe
    mostrarImagen();

    // Si hay un audio, mostrar el reproductor
    if (pregunta.audio) {
        const audio = document.createElement("audio");
        audio.controls = true; // Mostrar controles de audio
        audio.src = pregunta.audio; // Ruta del audio
        opcionesDiv.appendChild(audio); // Agregar el reproductor al contenedor de opciones
    }

    pregunta.opciones.forEach((opcion, index) => {
        const boton = document.createElement("button");
        boton.innerText = opcion;
        boton.addEventListener("click", () => verificarRespuesta(index));
        opcionesDiv.appendChild(boton);
    });
}

function mostrarImagen() {
    const pregunta = preguntas[preguntaActual];
    const imagenDiv = document.getElementById("imagen-pregunta");
    imagenDiv.innerHTML = ""; // Limpiar la imagen anterior
    const imagen = document.createElement("img");
    imagen.src = pregunta.imagen; // Ruta de la imagen
    imagen.alt = "Imagen de la pregunta";
    imagen.style.width = "100%"; // Ajustar el tamaño de la imagen
    imagenDiv.appendChild(imagen);
}

function verificarRespuesta(opcionSeleccionada) {
    respuestasSeleccionadas.push(opcionSeleccionada); // Guardar la respuesta seleccionada
    if (opcionSeleccionada === preguntas[preguntaActual].respuestaCorrecta) {
        puntaje++;
    }
    preguntaActual++;
    if (preguntaActual < preguntas.length) {
        mostrarPregunta();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    document.getElementById("pregunta").style.display = "none";
    document.getElementById("resultado").style.display = "block";
    document.getElementById("puntaje").innerText = puntaje;

    const respuestasDiv = document.getElementById("respuestas");
    respuestasDiv.innerHTML = ""; // Limpiar respuestas anteriores

    // Crear la tabla
    const tabla = document.createElement("table");
    tabla.className = "tabla-respuestas"; // Clase para el estilo de la tabla

    // Crear el encabezado de la tabla
    const encabezado = document.createElement("tr");
    encabezado.innerHTML = "<th>Pregunta</th><th>Tu respuesta</th><th>Respuesta correcta</th>";
    tabla.appendChild(encabezado);

    preguntas.forEach((pregunta, index) => {
        const respuestaSeleccionada = respuestasSeleccionadas[index] !== undefined ? preguntas[index].opciones[respuestasSeleccionadas[index]] : "No respondida";
        const respuestaCorrecta = pregunta.opciones[pregunta.respuestaCorrecta];

        // Crear una fila para cada pregunta
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${pregunta.pregunta}</td>
            <td>${respuestaSeleccionada}</td>
            <td>${respuestaCorrecta}</td>
        `;
        tabla.appendChild(fila);
    });

    respuestasDiv.appendChild(tabla); // Agregar la tabla al contenedor de respuestas
}

document.getElementById("reiniciar").addEventListener("click", function() {
    puntaje = 0;
    preguntaActual = 0;
    respuestasSeleccionadas = []; // Reiniciar las respuestas seleccionadas
    document.getElementById("resultado").style.display = "none";
    document.getElementById("inicio").style.display = "block"; // Regresar a la pantalla de inicio
});