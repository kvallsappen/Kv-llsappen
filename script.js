
auth.onAuthStateChanged(user => {
  const info = document.getElementById("user-info");
  if (user) {
    info.textContent = `Inloggad som: ${user.displayName}`;
  } else {
    info.textContent = "Inte inloggad.";
  }
});

function loginWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider);
}

function logout() {
  auth.signOut();
}

async function generateAIQuestion() {
  const prompt = document.getElementById("aiInput").value;
  const resultList = document.getElementById("aiResults");
  resultList.innerHTML = "Genererar...";
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "Du är en kreativ sällskapsspelsidé-generator." },
        { role: "user", content: `Skapa 3 roliga partyfrågor baserat på detta: "${prompt}"` }
      ],
      temperature: 0.8
    })
  });
  const data = await res.json();
  const output = data.choices[0].message.content;
  resultList.innerHTML = output.split("\n").map(q => `<li>${q}</li>`).join("");
}

// Mikrofon
let mediaRecorder, audioChunks = [];
function startRecording() {
  navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
      mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.start();
      audioChunks = [];
      mediaRecorder.ondataavailable = e => audioChunks.push(e.data);
      mediaRecorder.onstop = () => {
        const blob = new Blob(audioChunks);
        const url = URL.createObjectURL(blob);
        document.getElementById("player").src = url;
      };
    });
}
function stopRecording() {
  if (mediaRecorder) mediaRecorder.stop();
}
