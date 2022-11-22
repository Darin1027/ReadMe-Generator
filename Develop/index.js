// packages needed for this application
// * added 52 packages, and audited 53 packages in 3s
// * 16 packages are looking for funding
// * run `npm fund` for details
// * found 0 vulnerabilities
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// Acceptance Criteria
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

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
  // {
  //   type: "input",
  //   message: "Input project table of contents.",
  //   name: "table",
  // },
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
    type: "list",
    message: "Input project license.",
    choices: [
      "MIT",
      "Unlicense",
      "GNU GPL v2",
      "Apache 2.0 License",
      "GNU GPL v3",
      "The Do What the Fuck You Want to Public License",
    ],
    name: "license",
  },
  {
    type: "input",
    message: "Input project contributors.",
    name: "contributors",
  },
  {
    type: "input",
    message: "Input project tests needed.",
    name: "tests",
  },
  {
    // WHEN I enter my GitHub username
    // THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
    // WHEN I enter my email address
    // THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
    type: "input",
    message: "Input your Github URL.",
    name: "github",
  },
  {
    type: "input",
    message: "Input your email.",
    name: "email",
  },
];

//  function to write README file
function writeToFile(generatedReadme, data) {
  fs.writeFile(generatedReadme, data, function (err) {
    if (err) {
      return console.log(err);
    } else {
      console.log("success");
    }
  });
}

//  function to initialize app
function init() {
  inquirer.prompt(questions).then(function (data) {
    writeToFile("Readmegenerated.md", generateMarkdown(data));
    console.log(data);
  });
}

// Function call to initialize app
init();

module.exports = questions;
