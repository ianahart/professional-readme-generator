const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const { questions } = require('./data/questions.js');

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
  fs.writeFile(fileName, data, (err) => {
    err ? console.error(err) : console.log(`${fileName} has been created!`);
  });
};

// TODO: Create a function to initialize app

const promptUser = () => {
  inquirer
    .prompt([...questions])
    .then((answers) => {
      writeToFile('SAMPLE_README.md', generateMarkdown(answers));
    })
    .catch((err) => {
      if (err.isTtyError) {
        console.log('Prompt couldn\t be rendered in the current environment');
      } else {
        console.log('Something went wrong', err);
      }
    });
};

const init = () => {
  promptUser();
};

// Function call to initialize app
init();
