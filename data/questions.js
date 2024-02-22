const questions = [
  {
    type: 'input',
    message: 'Please enter your project title',
    name: 'title',
    filter: (answer) => answer.slice(0, 1).toUpperCase() + answer.slice(1).toLowerCase(),
    validate: (answer) => {
      if (answer.trim().length === 0) {
        return 'Please enter a valid title';
      }
      return true;
    },
  },
  {
    type: 'input',
    message: 'Please describe your project in a few sentences.',
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
    message: 'Please provide the necesary installation instructions:',
    name: 'installation',
    validate: (answer) => {
      if (answer.trim().length === 0) {
        return 'Please enter installation instructions';
      }
      return true;
    },
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
      'Please contact the author to be added as a collaborator to this project and to discuss contribution guidelines.',
      'There are no contributions being accepted at this time.',
    ],
    name: 'contribution',
  },
  {
    type: 'input',
    message: 'Please provide any test information for your project:',
    name: 'test',
  },
];

module.exports = {
  questions,
};
