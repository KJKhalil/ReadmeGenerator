const fs = require('fs');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  else {
    return '[!${license} license](https://img.shields.io/badge/License-${license}-red.svg)]($renderLicenseLink(license)})'
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT'
  }

  if (license === 'CC--0') {
    return 'http://creativecommons.org/publicdomain/zero/1.0/'
  }

  if (license === 'GNU') {
    return 'https://www.gnu.org/licenses/gpl-3.0'
  }

  if (license === 'ISC') {
    return 'https://opensource.org/licenses/ISC'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  else {
    return '## License(s)'
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table Of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Test](#test)
  * [License(s)](#license)
  * [Question(s)](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contribution}

  ## Test
  ${data.test}

  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ## Question(s)
  If you have any questions about this project you can reach me at:
  GitHub: https://github.com/${data.github}
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
