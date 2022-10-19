// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message:'Enter The Title Of Your Project.',
        validate: titleInput => {
            if (titleInput) {
                return true;
            }
            else {
                console.log('Please Enter A Title')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message:'Enter A Description Of Your Project.',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            }
            else {
                console.log('Please Enter A Description')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message:'Enter The Installation Instructions For Your Project.',
        validate: installationInput => {
            if (installationInput) {
                return true;
            }
            else {
                console.log('Please Enter The Installation Instructions')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message:'Enter The Usage Instructions For Your Project.',
        validate: usageInput => {
            if (usageInput) {
                return true;
            }
            else {
                console.log('Please Enter The Usage Instructions')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message:'Enter The Contribution Guidelines For Your Project.',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            }
            else {
                console.log('Please Enter The Contribution Guidelines')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message:'Enter The Test Instructions For Your Project.',
        validate: testInput => {
            if (testInput) {
                return true;
            }
            else {
                console.log('Please Enter The Test Instructions')
                return false;
            }
        }
    }, 
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
