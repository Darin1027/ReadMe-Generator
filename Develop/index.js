// packages needed for this application
// * added 52 packages, and audited 53 packages in 3s
// * 16 packages are looking for funding
// * run `npm fund` for details
// * found 0 vulnerabilities
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

// An array of questions for user input
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
