document.addEventListener("DOMContentLoaded", function() {
    // Agregar un evento al botón "Regresar al Juego"
    document.getElementById("boton-regresar").addEventListener("click", function() {
        window.location.href = "index.html"; // Redirigir a la página principal
    });

    // Función para mostrar la lista de audiolibros
    mostrarAudiolibros();
});

// Función para mostrar la lista de audiolibros
function mostrarAudiolibros() {
    const audiolibros = [
        {
            titulo: "HISTORIA DEL ARTE",
            autor: "Gorka Perez",
            audio: "musica/HISTORIA_ARTE.mp3" // Ruta del audio
        },
        {
            titulo: "Aprender a mirar y sentir con el arte",
            autor: "Miquel del Pozo",
            audio: "musica/Aprender_a_mirar_y_sentir_con_el_arte.mp3" // Ruta del audio
        },
        {
            titulo: "Manual de pintura y caligrafía",
            autor: "José Saramago",
            audio: "musica/Manual_de_pintura_y_caligrafía.mp3" // Ruta del audio
        }
    ];

    const listaDiv = document.getElementById("lista-audiolibros");
    listaDiv.innerHTML = ""; // Limpiar lista anterior
    listaDiv.style.display = "block"; // Mostrar la lista de audiolibros

    // Iterar sobre los audiolibros y crear elementos para cada uno
    audiolibros.forEach(audiolibro => {
        const item = document.createElement("div");
        item.classList.add("audiolibro-item");

        const titulo = document.createElement("h3");
        titulo.innerText = audiolibro.titulo;

        const autor = document.createElement("p");
        autor.innerText = `Autor: ${audiolibro.autor}`;

        const audio = document.createElement("audio");
        audio.controls = true; // Mostrar controles de audio
        audio.src = audiolibro.audio; // Ruta del audio

        // Agregar los elementos al contenedor
        item.appendChild(titulo);
        item.appendChild(autor);
        item.appendChild(audio);
        listaDiv.appendChild(item);
    });
}