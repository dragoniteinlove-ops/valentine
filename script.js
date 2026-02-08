let yesBtn = document.getElementById("yesBtn");
let noBtn = document.getElementById("noBtn");
let question = document.getElementById("question");

let yesSize = 18;
let noSize = 18;
let noCount = 0;

const messages = [
  "Are you sure? 🌸",
  "Still a no… or just thinking? 🤍",
  "February feels softer with you.",
  "I’ll wait, but I’m hopeful.",
  "Just checking once more 🌷",
  "Still okay either way.",
  "This is the last playful ask 🤍",
  "Alright… whatever you feel is okay."
];

noBtn.addEventListener("click", () => {
  noCount++;

  if (noCount <= 7) {
    yesSize += 6;
    noSize -= 3;

    yesBtn.style.fontSize = yesSize + "px";
    noBtn.style.fontSize = Math.max(noSize, 10) + "px";

    question.innerText = messages[noCount - 1];
  }
  else if (noCount === 8) {
    question.innerText = messages[7];
  }
  else if (noCount === 9) {
    window.location.href = "index.html";
  }
});

yesBtn.addEventListener("click", () => {
  window.location.href = "yes.html";
});
