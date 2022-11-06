const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown.js');

const questions = [
    {
        name: '',
        type: 'input',
        message: '',
    },
    {
        name: '',
        type: 'list',
        message: '',
        choices: [],
    },
   
];

function writeToFile(fileName, data) {    
    return fs.writeFileSync(path.join(process.cwd(), '/dist', fileName), data)
};

function init() {
    inquirer
    .prompt(questions)
        .then(answers => {
            writeToFile('team.html', generateMarkdown(answers)
        )});
}

init();