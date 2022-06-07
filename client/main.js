//Compliment and fortune cookie buttons

const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const decisionBtn = document.getElementById("oracle-btn");

const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment/").then((res) => {
    const data = res.data;
    alert(data);
  });
};
const getFortune = () => {
  axios.get("http://localhost:4000/api/fortune/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

complimentBtn.addEventListener("click", getCompliment);
fortuneBtn.addEventListener("click", getFortune);
decisionBtn.addEventListener("click", getCompliment);

//Oracle decision maker.
//!!Totally broken, still needs debugging
//6.2. Even more broken than it was yesterday. I'll come back to it, I still need to add in my goal board thing

// const askOracle = () => {
//   axios.get("http://localhost:4000/api/decision/");
//   const data = res.data;
//   alert(data);

// let messageText = document.getElementById("message");
// if (messageText != null) {
//   messageText.parentNode.removeChild("message");
// }

// };

// const getDecision = () => {
//   // let decisions = decisionsArr[Math.floor(Math.random) * decisionsArr.length];
//   // let parent = document.getElementById("decision-maker");
//   // let newMessage = document.createElement("div");
//   // newMessage.setAttribute("id", "decision");
//   // newMessage.innerHTML = '"' + decisions + '"';
//   // parent.appendChild(newMessage);
// };

//Pomodoro timer code
//I know it's super janky but I'm just so relieved I finally got it to work.
//Edit: it stopped working. I don't know why.
let seconds = 0;
let prodMins = 20;
let restMins = 10;

let pomodoroWork = (prodMins) => {
  document.getElementById("progress-bar-work").max = prodMins * 60;
  seconds = prodMins * 60 || 0;
  interval = setInterval(function () {
    seconds--;
    if (!seconds) {
      clearInterval(interval);
      alert("Done! Now take a break for 5 minutes.");
    }
    document.getElementById("progress-bar-work").value = seconds;
  }, 1000);
};

let pomodoroRest = (restMins) => {
  document.getElementById("progress-bar-rest").max = restMins * 60;
  seconds = restMins * 60 || 0;
  interval = setInterval(function () {
    seconds--;
    if (!seconds) {
      clearInterval(interval);
      alert(
        "Hope you had a good break! Now it's back to work, and let's have a good session!"
      );
    }
    document.getElementById("progress-bar-rest").value = seconds;
  }, 1000);
};

//Goal board
