const questions = [
  {
    type: 'input',
    message: 'Please enter your project title',
    name: 'title',
    filter: (answer) => {
      return answer
        .split(' ')
        .map((part) => part.slice(0, 1).toUpperCase() + part.slice(1).toLowerCase())
        .join(' ');
    },
    validate: (answer) => {
      if (answer.trim().length === 0) {
        return 'Please enter a valid title';
      }
      return true;
    },
  },
  {
    type: 'input',
    message: 'Please provide a brief description of your project:',
    name: 'description',
    validate: (answer) => {
      if (answer.trim().length === 0) {
        return 'Please enter valid description';
      }
      return true;
    },
  },
  {
    type: 'input',
    message: 'Any dependencies to install? (npm i)',
    name: 'installation',
    filter: (answer) => (answer.length > 0 ? answer.trim() : 'N/A'),
  },
  {
    type: 'input',
    message: 'Plase provide usage information:',
    name: 'usage',
    validate: (answer) => {
      if (answer.trim().length === 0) {
        return 'Please enter usage information';
      }
      return true;
    },
  },
  {
    type: 'list',
    message: 'Please select an option for contribution guidelines',
    choices: [
      'Please get in touch with the author to be added as a collaborator to this project and to discuss contribution guidelines.',
      'There are no contributions being accepted at this time.',
    ],
    name: 'contribution',
  },
  {
    type: 'input',
    message: 'What command should be run to run tests?',
    name: 'test',
    filter: (answer) => (answer.trim().length === 0 ? 'N/A' : answer),
  },
  {
    type: 'list',
    message: 'Please select a license that suits your project:',
    choices: ['GNU GPL-3.0', 'Apache License 2.0', 'None', 'MIT License'],
    name: 'license',
  },
  {
    type: 'input',
    message: 'Please provide your GitHub username:',
    name: 'username',
    validate: (answer) => {
      if (answer.trim().length === 0) {
        return 'Your GitHub username may not be blank';
      }
      return true;
    },
  },
  {
    type: 'input',
    message: 'Please provide your email address:',
    name: 'email',
    validate: (answer) => {
      if (answer.trim().length === 0) {
        return 'N/A';
      }
      return true;
    },
  },
  {
    type: 'input',
    message: 'Please provide your full name for the license',
    name: 'fullName',
    filter: (answer) => {
      return answer
        .split(' ')
        .map((part) => part.slice(0, 1).toUpperCase() + part.slice(1).toLowerCase())
        .join(' ');
    },
    validate: (answer) => {
      if (answer.trim().length === 0) {
        return 'The full name for the license may not be blank';
      }
      return true;
    },
  },
];

module.exports = {
  questions,
};
