const goals = require("./goals.json");
let globalID = 4;
module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },

  getFortune: (req, res) => {
    const fortunes = [
      "A lifetime of happiness lies ahead of you.",
      "Any day above ground is a good day.",
      "Disbelief destroys the magic.",
      "Every flower blooms in its own sweet time.",
      "Go take a rest; you deserve it.",
      "You can see a lot just by looking.",
    ];

    // choose random fortune
    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];

    res.status(200).send(randomFortune);
  },

  // decision helper

  getDecision: (req, res) => {
    const decisionsArr = [
      `Most likely.`,
      `Oh, for sure!`,
      `Yes.`,
      `Yeah, that sounds fun!`,
      `Oh dude that sounds dope, do it do it do it!!`,
      `That's a no from me, my guy.`,
      `No.`,
      `Probably not.`,
      `Maybe later down the line.`,
      `Yeah no don't do that.`,
    ];
    let randomIndex = Math.floor(Math.random() * decisionsArr.length);
    let randomDecision = decisionsArr[randomIndex];

    res.status(200).send(randomDecision);
  },

  // goal feature
  getGoals: (req, res) => res.status(200).send(goals),
  deleteGoal: (req, res) => {
    let i = goals.findIndex((elem) => elem.uniqueID === +req.params.uniqueID);
    goals.splice(i, 1);
    res.status(200).send(goals);
  },
  newGoal: (req, res) => {
    let { uniqueID, scope, goal } = req.body;
    let addedGoal = {
      uniqueID: globalID,
      scope,
      goal,
    };
    goals.push(addedGoal);
    res.status(200).send(goals);
  },
};
