const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const { questions } = require('./data/questions.js');

// write the passed in the data to the designated filename
const writeToFile = (fileName, data) => {
  fs.writeFile(fileName, data, (err) => {
    err ? console.error(err) : console.log(`${fileName} has been created!`);
  });
};

// prompt the user to answer questions, once the answers
// have been received write them to a file
const promptUser = (fileName) => {
  inquirer
    .prompt([...questions])
    .then((answers) => {
      writeToFile(fileName, generateMarkdown(answers));
    })
    .catch((err) => {
      if (err.isTtyError) {
        console.log('Prompt couldn\t be rendered in the current environment');
      } else {
        console.log('Something went wrong', err);
      }
    });
};

// initialize the application
const init = () => {
  const fileName = 'SAMPLE_README.md';
  promptUser(fileName);
};

init();
