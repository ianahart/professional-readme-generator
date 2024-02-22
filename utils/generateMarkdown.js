const { GNULicense, MITLicense, apacheLicense } = require('../data/licenses.js');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  let selectedLicense;
  switch (license) {
    case 'GNU GPL-3.0':
      selectedLicense =
        '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)';
      break;
    case 'Apache License 2.0':
      selectedLicense =
        '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'MIT License':
      selectedLicense =
        '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'No License':
      selectedLicense = '';
  }

  return selectedLicense;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseSection = (license, fullName) => {
  let link;
  switch (license) {
    case 'GNU GPL-3.0':
      link = `
  This application is covered under the ${license}

  <details>
      <summary>
          Preamble
      </summary>
    Copyright (c) ${new Date().getFullYear()} ${fullName}

    ${GNULicense}

  </details>
`;
      break;
    case 'Apache License 2.0':
      link = `
  This application is covered under the ${license}

  <details>
      <summary>
          Preamble
      </summary>

    ${apacheLicense}

  </details>
`;
      break;
    case 'MIT License':
      link = `
This application is covered under ${license}

<details>
  <summary>
    Preamble
  </summary>

Copyright (c) ${new Date().getFullYear()} ${fullName}

${MITLicense}

</details>
`;
      break;
    case 'No License':
      link = '';
      break;
  }
  return link;
};
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  return license === 'No License' ? '' : `* [License](#license)`;
};

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  const { title, description, installation, usage, contribution, test, license, username, email, fullName } = data;

  console.log(renderLicenseLink(license));
  return `# ${title}

  ${renderLicenseBadge(license)}

  ## Description
  ${description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${installation}

  ## Usage
  ${usage}

  ## License
  ${renderLicenseSection(license, fullName)}

  ## Contributing
  ${contribution}

  ## Tests
  ${test}

  ## Questions
  * You can reach me through email at ${email}
  * Here is my GitHub [profile](https://github.com/${username})
`;
};

module.exports = generateMarkdown;
