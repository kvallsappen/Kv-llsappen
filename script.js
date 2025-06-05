
const db = firebase.firestore();

function saveQuestion() {
  const text = document.getElementById("customQuestion").value;
  const mode = document.getElementById("customMode").value;
  const level = document.getElementById("customLevel").value;
  db.collection("questions").add({ text, mode, level })
    .then(() => alert("Fråga sparad!"))
    .catch(err => console.error("Fel vid sparande:", err));
}

function loadQuestions() {
  const list = document.getElementById("questionList");
  list.innerHTML = "";
  db.collection("questions").get().then(snapshot => {
    snapshot.forEach(doc => {
      const data = doc.data();
      const li = document.createElement("li");
      li.textContent = `${data.text} [${data.mode}, ${data.level}]`;
      list.appendChild(li);
    });
  });
}
