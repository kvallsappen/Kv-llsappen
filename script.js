
function chooseMode(mode) {
  const content = document.getElementById("content");
  if (mode === 'AI') {
    content.innerHTML = '<h2>🤖 AI-läge</h2><p>Skriv in vad du vill göra ikväll så fixar vi frågorna!</p><textarea rows="4" cols="40" placeholder="Beskriv kvällen..."></textarea><br><button onclick="generateAI()">Skapa frågor</button>';
  } else {
    content.innerHTML = `<h2>${mode}-läge aktiverat!</h2><p>Frågor laddas...</p>`;
  }
}
function generateAI() {
  document.getElementById("content").innerHTML += "<p>🧠 AI genererar frågor... (Funktion under uppbyggnad)</p>";
}
