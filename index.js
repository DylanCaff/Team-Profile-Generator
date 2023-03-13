//const generateHTML = require('./src/generateHTML');
const fs = require('fs');

const inquirer = require('inquirer');

const { Manager, managerQuestionsArr } = require('./lib/Manager');

const { Engineer, engineerQuestionsArr } = require('./lib/Engineer');

const { Intern, internQuestionsArr } = require('./lib/Intern');

const teamArry = [];

const template = require("./src/generateHTML")


const init = () => { managerQuestions() }

const managerQuestions = () => {
    inquirer.prompt(managerQuestionsArr)
        .then((input) => {
            input = new Manager(input.name, input.id, input.email, input.officeNumber)
            teamArry.push(input);
            return addEmployee();
        })
};

const engineerQuestions = () => {
    inquirer.prompt(engineerQuestionsArr)
        .then((input) => {
            input = new Engineer(input.name, input.id, input.email, input.github)
            teamArry.push(input);
            return addEmployee();
        })
};

const internQuestions = () => {
    inquirer.prompt(internQuestionsArr)
        .then((input) => {
            input = new Intern(input.name, input.id, input.email, input.school)
            teamArry.push(input);
            return addEmployee();
        })
};


const addEmployee = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Which type of team member would you like to add?",
            choices: [
                { name: 'Engineer', value: "addEngineer" },
                { name: 'Intern', value: "addIntern" },
                { name: 'DONE', value: "done" }
            ]
        },
    ]).then(input => {
        if (input.role === 'addEngineer') { engineerQuestions(); };
        if (input.role === 'addIntern') { internQuestions(); };
        if (input.role === 'done') { writeToFile(teamArry) }

    });
};
const writeToFile = data => {
    console.log(data)
    fs.writeFile('./dist/index.html', template(data), err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log(data)
            console.log("Your team has been created!")
        }
    });
};


init();