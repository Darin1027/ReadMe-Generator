// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// MIT, Unlicense, GNU GPL v2, Apache 2.0 License, GNU GPL v3, The Do What the Fuck You Want to Public License
function renderLicenseBadge(license) {
  let licenseBadge = "";
  if (license === "MIT") {
    licenseBadge =
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "Unlicense") {
    licenseBadge =
      "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
  } else if (license === "GNU GPL v2") {
    licenseBadge =
      "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
  } else if (license === "Apache 2.0 License") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "GNU GPL v3") {
    licenseBadge =
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "The Do What the Fuck You Want to Public License") {
    licenseBadge =
      "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)";
  } else {
    badge = "";
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";
  if (license === "MIT") {
    licenseLink = "https://opensource.org/licenses/MIT";
  } else if (license === "Unlicense") {
    licenseLink = "https://unlicense.org/";
  } else if (license === "GNU GPL v2") {
    licenseLink = "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
  } else if (license === "Apache 2.0 License") {
    licenseLink = "https://opensource.org/licenses/Apache-2.0";
  } else if (license === "GNU GPL v3") {
    licenseLink = "https://www.gnu.org/licenses/gpl-3.0";
  } else if (license === "The Do What the Fuck You Want to Public License") {
    licenseLink = "http://www.wtfpl.net/about/";
  } else {
    licenseLink = "";
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderlicenseSection(license) {
  if ((license = "")) {
    licenseSection = "";
  } else {
    licenseSection = `License: ${license}`;
  }
  return licenseSection;
}

// generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## ${renderlicenseSection(data.license)}
* ${renderLicenseBadge(data.license)}
* ${renderLicenseLink(data.license)}

## Table of contents:
* [License](#license)
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [contributors](#contributors)
* [Tests](#tests)
* [Questions](#questions)

## Description:
${data.description}

## Installation:
${data.instructions}

## Usage:
${data.usage}

## Contributors:
${data.contributors}

## Tests:
${data.tests}

# Questions:
## Reach out to me through Github for any questions:
${data.github}
## Or send an email if that is your preferred method of communication:
${data.email}
`;
}

module.exports = generateMarkdown;
