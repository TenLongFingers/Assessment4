const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");

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

const askOracle = () => {
  let messageText = document.getElementById("message");
  if (messageText != null) {
    messageText.parentNode.removeChild("message");
  }
};
const getDecision = () => {
  let decisionsArr = [
    `Most likely.`,
    `Yes, for sure!`,
    `Yes.`,
    `Yeah, that sounds fun!`,
    `Oh dude that sounds dope, do it do it do it!!`,
    `That's a no from me, my guy.`,
    `No.`,
    `Probably not.`,
    `Maybe later down the line.`,
    `Yeah no don't do that.`,
  ];

  let decisions = decisionsArr[Math.floor(Math.random) * decisionsArr.length];

  let parent = document.getElementById("decision-maker");
  let newMessage = document.createElement("div");
  newMessage.setAttribute("id", "decision");
  newMessage.innerHTML = '"' + decisions + '"';
  parent.appendChild(newMessage);
};

console.log(getDecision());

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
