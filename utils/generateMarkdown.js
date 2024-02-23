const { GNULicense, MITLicense, apacheLicense } = require('../data/licenses.js');

// render the license badge
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
    case 'None':
      selectedLicense = '';
  }

  return selectedLicense;
};

// TODO: Create a function that returns the license link

// render the license section in the read me
const renderLicenseSection = (license, fullName) => {
  let link;
  switch (license) {
    case 'GNU GPL-3.0':
      link = `
  This project is covered under the ${license}

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
  This project is covered under the ${license}

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
This project is covered under ${license}

<details>
  <summary>
    Preamble
  </summary>

Copyright (c) ${new Date().getFullYear()} ${fullName}

${MITLicense}

</details>
`;
      break;
    case 'None':
      link = '';
      break;
  }
  return link;
};
// render license link in the table of contents
const renderLicenseLink = (license) => {
  return license === 'None' ? '' : `* [License](#license)`;
};

// generate the markdown for the readme
const generateMarkdown = ({
  title,
  description,
  installation,
  usage,
  contribution,
  test,
  license,
  username,
  email,
  fullName,
}) => {
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
  To install the necessary dependencies, run these commands(s):
  > \`\`\`${installation}\`\`\`


  ## Usage
  ${usage}

  ## License
  ${renderLicenseSection(license, fullName)}

  ## Contributing
  ${contribution}

  ## Tests
  To run tests, run these command(s):

  > \`\`\`${test}\`\`\`

  ## Questions
  * You can reach me through email at ${email}
  * Here is my GitHub [profile](https://github.com/${username})
`;
};

module.exports = generateMarkdown;
