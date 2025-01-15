// Obtener el elemento del botón
const voiceButton = document.querySelector('.voice-button');

// Crear una función para leer el texto del botón
function leerTextoBoton() {
    const utterance = new SpeechSynthesisUtterance(voiceButton.textContent);
    window.speechSynthesis.speak(utterance);
}

// Agregar un evento para el mouse sobre el botón
voiceButton.addEventListener('mouseover', leerTextoBoton);