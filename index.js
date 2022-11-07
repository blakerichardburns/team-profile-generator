const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown.js');
const Employee = require('./utils/employee.js')
const Manager = require('./utils/manager.js');
const Engineer = require('./utils/engineer.js');
const Intern = require('./utils/intern.js');

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