// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Ella sabía que él sabía", time: 0 },
  { text: "Que algún día pasaría", time: 0.05 },
  { text: "Que vendría a buscarla", time: 2 },
  { text: "Con sus flores amarillas", time: 2.5 },

  
  { text: "No te apures, no detengas", time2: 14.2 },
  { text: "El instante del encuentro", time2: 15.2 },
  { text: "Está dicho que es un hecho", time2: 16.8 },
  { text: "No la pierdas, no hay derecho", time2: 18.2 },
  { text: "No te olvides que la vida", time2: 21.2 },
  { text: "Casi nunca está dormida", time2: 24.2 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.5; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

function updateLyrics2() {
  var time = audio.currentTime;
  var currentLine = lyricsData.find(
    (line) => time >= line.time2 && time < line.time2 + 3 // Tiempo más rápido
  );

  if (currentLine) {
    var fadeInDuration = 0.5; // Duración más rápida para el segundo párrafo
    var opacity = Math.min(1, (time - currentLine.time2) / fadeInDuration);
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  }  else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
  
}
setInterval(updateLyrics, 800);
setInterval(updateLyrics2, 800); // Intervalo más corto para el segundo párrafo

