
const questions = {
  fest: ["Skåla med någon du precis träffat!", "Gör en dansrutin med två andra!"],
  par: ["Vad är det pinsammaste ni gjort ihop?", "Ge din partner en komplimang!"],
  aw: ["Berätta något du aldrig sagt på jobbet.", "Imitera din chef i 10 sekunder!"],
  sex: ["Berätta om din första kyss.", "Välj en annan spelare och gör en sexig blick."],
  ai: ["Beskriv din drömkväll så skapas frågor..."]
};

function selectMode(mode) {
  const qList = questions[mode];
  const question = qList[Math.floor(Math.random() * qList.length)];
  document.getElementById("question").textContent = question;
}
