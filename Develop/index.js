// packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Input project name.",
    name: "title",
  },
  {
    type: "input",
    message: "Input project description.",
    name: "description",
  },
  {
    type: "input",
    message: "Input project table of contents.",
    name: "table",
  },
  {
    type: "input",
    message: "Input project installation instructions.",
    name: "instructions",
  },
  {
    type: "input",
    message: "Input project usage.",
    name: "usage",
  },
  {
    type: "input",
    message: "Input project license.",
    name: "license",
  },
  {
    type: "input",
    message: "Input project contributors.",
    name: "contributors",
  },
  {
    type: "input",
    message: "Input project tests.",
    name: "tests",
  },
  {
    type: "input",
    message: "Input project questions.",
    name: "questions",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
