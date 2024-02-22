const inquirer = require('inquirer');
const { questions } = require('./data/questions');

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app

const promptUser = () => {
  inquirer
    .prompt([...questions])
    .then((answers) => {
      console.log(answers);
    })
    .catch((err) => {
      console.log(err);
      if (err.isTtyError) {
        console.log('Prompt couldn\t be rendered in the current environment');
      } else {
        console.log('Something went wrong');
      }
    });
};

const init = () => {
  promptUser();
};

// Function call to initialize app
init();
