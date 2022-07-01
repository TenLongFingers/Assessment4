const express = require("express");
const cors = require("cors");

const { getCompliment, getFortune, getDecision } = require("./controller");

const app = express();

app.use(cors());

app.use(express.json());

//endpoints for the compliment, fortune, and decision-maker features
app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/decision", getDecision);

//endpoints for goals features
const { getGoals, deleteGoal, newGoal, updateGoal } = require(`./controller`);
app.get(`/api/goals`, getGoals);
app.delete(`/api/goals/:uniqueID`, deleteGoal);
app.post(`/api/goals`, newGoal);

//server
app.listen(4000, () => console.log("Server running on 4000"));
