//const generateHTML = require('./src/generateHTML');
const fs = require('fs');
const inquirer = ('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const teamArry = [];

const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "What is the team manager's name?"
        },
        {
            type: 'input',
            name: 'managerId',
            message: "What is the team manager's id?"
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is the team manager's email?"
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: "What is the team manager's office number?"
        },
    ]) const { name, id, email, officeNumber } = managerInput;
            const manager = new Manager(name, id, email, officeNumber);
        });
};

const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Which type of team member would you like to add?",
            choices: ['Engineer', 'Intern', "I don't want to add anymore team members"]
        },
    ])
};






