const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown.js');
const Employee = require('./utils/employee.js')
const Manager = require('./utils/manager.js');
const Engineer = require('./utils/engineer.js');
const Intern = require('./utils/intern.js');

const managerQuestions = [
    {
        name: 'managerName',
        type: 'input',
        message: 'What is the team manager\'s name?',
    },
    {
        name: 'managerId',
        type: 'input',
        message: 'What is the manager\'s Employee ID #?',
    },
    {
        name: 'managerEmail',
        type: 'input',
        message: 'What is the manager\'s email address?',
    },
    {
        name: 'managerPhone',
        type: 'input',
        message: 'What is the manager\'s office phone number?',
    }
];

const addEmployee = [
    {
        name: 'addEmployee',
        type: 'list',
        message: 'Which type of team member would you like to add?',
        choices: ['Engineer', 'Intern', 'All team members have been added'],
    }
];

const engineerQuestions = [
    {
        name: 'engineerName',
        type: 'input',
        message: 'What is the engineer\'s name?',
    },
    {
        name: 'engineerId',
        type: 'input',
        message: 'What is the engineer\'s Employee ID #?',
    },
    {
        name: 'engineerEmail',
        type: 'input',
        message: 'What is the engineer\'s email address?',
    },
    {
        name: 'engineerGithub',
        type: 'input',
        message: 'What is the engineer\'s Github username?',
    }
];

const internQuestions = [
    {
        name: 'internName',
        type: 'input',
        message: 'What is the intern\'s name?',
    },
    {
        name: 'internId',
        type: 'input',
        message: 'What is the intern\'s Employee ID #?',
    },
    {
        name: 'internEmail',
        type: 'input',
        message: 'What is the intern\'s email address?',
    },
    {
        name: 'internSchool',
        type: 'input',
        message: 'Which institution of higher learning does/did your intern attend?',
    }
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