const fs = require('fs');
// Creates a function to put the license(s) badges at the top of the README file.
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  else {
    return '[!${license} license](https://img.shields.io/badge/License-${license}-red.svg)]($renderLicenseLink(license)})'
  }
}

// Creates a function to return the links of the licenses chosen.
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

// Creates a ## License(s) section in the README file.
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  else {
    return '## License(s)'
  }
}

// Creates the lay out of the README file for generateMarkdown.js.
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table Of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Test](#test)
  * [License(s)](#licenses)
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
