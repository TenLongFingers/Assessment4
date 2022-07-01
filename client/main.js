//Selectors
const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const coinBtn = document.getElementById("coin");
const scopeSelect = document.getElementById("scope-dropdown");
const goalsContainer = document.getElementById("goals-container");

const baseURL = `http://localhost:4000/api/`;

//functions
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
// decision maker.

const flipCoin = () => {
  axios.get("http://localhost:4000/api/decision/").then((res) => {
    // clear previous message
    let messageText = document.getElementById("decision");
    if (messageText != null) {
      messageText.parentNode.removeChild(messageText);
    }

    // coin animation
    coinBtn.classList.add("coin-anim");
    setTimeout(function () {
      coinBtn.classList.remove("coin-anim");
      //generate message
      const data = res.data;
      let parent = document.getElementById("decision-maker");
      let newMessage = document.createElement("div");
      newMessage.setAttribute("id", "decision");
      newMessage.innerHTML = '"' + data + '"';
      parent.appendChild(newMessage);
    }, 1000);
  });
};

//event listeners
complimentBtn.addEventListener("click", getCompliment);
fortuneBtn.addEventListener("click", getFortune);
coinBtn.addEventListener("click", flipCoin);

//Pomodoro timer code
//I know it's super janky but I'm just so relieved I finally got it to work.
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
const goalsCallback = ({ data: goals }) => showGoals(goals);
const errCallback = (err) => console.log(err);

const fetchAllGoals = () =>
  axios.get(baseURL).then(goalsCallback).catch(errCallback);
const newGoal = (body) =>
  axios.post(baseURL, body).then(goalsCallback).catch(errCallback);
const deleteGoal = (uniqeID) =>
  axios.delete(`${baseURL}/${uniqeID}`).then(goalsCallback).catch(errCallback);
const updateGoal = (uniqeID, scope) =>
  axios
    .put(`${baseURL}/${uniqeID}`, scope)
    .then(goalsCallback)
    .catch(errCallback);

const submitHandler = (e) => {
  e.preventDefault();
  let goal = document.querySelector("#goal");
  let scope = document.querySelector("#scope");

  let bodyObj = {
    goal: goal.value,
    scope: scope.value,
  };
};
