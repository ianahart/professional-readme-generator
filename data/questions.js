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
];

module.exports = {
  questions,
};
