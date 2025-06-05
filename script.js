
const questions = {
  fest: ["Skåla med någon!", "Dansrutin med 2 andra!"],
  par: ["Vad är det pinsammaste ni gjort ihop?", "Ge din partner en komplimang!"],
  aw: ["Berätta något du aldrig sagt på jobbet.", "Imitera din chef!"],
  sex: ["Vad var din första kyss?", "Gör en sexig blick till någon här."],
  ai: []
};

function selectMode(mode) {
  const qList = questions[mode];
  const question = qList[Math.floor(Math.random() * qList.length)];
  document.getElementById("question").textContent = question;
  startTimer(30);
}

let timer;
function startTimer(seconds) {
  clearInterval(timer);
  let timeLeft = seconds;
  const display = document.getElementById("timer");
  timer = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timer);
      display.textContent = "Tidens slut!";
    } else {
      display.textContent = `${timeLeft--} sekunder kvar`;
    }
  }, 1000);
}

let points = 0;
function addPoints(p) {
  points += p;
  document.getElementById("score").textContent = `Poäng: ${points}`;
}

function addCustomQuestion(e) {
  e.preventDefault();
  const question = document.getElementById("customQuestion").value;
  const mode = document.getElementById("customMode").value;
  if (!questions[mode]) questions[mode] = [];
  questions[mode].push(question);
  alert("Fråga tillagd!");
  e.target.reset();
}

function generateAIQuestion() {
  const prompt = document.getElementById("aiPrompt").value;
  if (!prompt.trim()) return alert("Skriv in din kvällsbeskrivning!");
  const aiQuestion = "AI-genererad fråga baserat på: " + prompt;
  questions.ai.push(aiQuestion);
  document.getElementById("question").textContent = aiQuestion;
}
