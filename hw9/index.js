const { prompt } = require('inquirer');
const fs = require('fs');

const questions = [
    {
        message: "Hello, please provide GitHub username?",
        name: 'name',
        default: "Sederick C"
    },
    {
        message: "What is the URL to your Project?",
        name: 'URL',
        default: "gitHub"
    },
    {
        message: "Please provide your email address?",
        name: 'email',
        default: "@"
    },
    {
        message: "What is the title to your project?",
        name: 'Title',
        default: "title"
    },
    {
        message: "Description of project",
        name: 'description',
        default: "What does it do?"
    },
    {
        message: "Licenses used for project?",
        name: 'license',
        type: 'checkbox',
        choices: ["BSD 3", "APACHE 2.0", "MIT", "GPL 3.0", "None"],
        default: ['APACHE 2.0']
    },
    {
        message: "What command should be run to run tests?",
        name: 'tests',
        type: 'checkbox',
        choices: ['npm test', 'Norton', 'Windows Firewall', 'Apple Care',],
        default: ['npm test']
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the repo?",
    },
    {
        type: "input",
        name: "contributing",
        message: "Please note if others will be contributing",
    },
    {
        type: "input",
        name: "installation",
        message: "What command should be run to install dependencies?",
        default: "npm i"
    }
]

// prompt({'some prompt'}).then(res=>console.log())

async function init() {
    const reply = await prompt(questions);
    console.log(reply);
    writeHTML(reply)
}

function writeHTML(data) {
    const html = `

 Name:
 ${data.name}

Description:
${data.description}

URL:
${data.URL}

email:
${data.email}

Title:
${data.Title}

## Table of Contents 

(#installation)
${data.description}

license:
${data.license}

Tests:
${data.test}

Usage:
${data.usage}

Contributions:
${data.contributing}

Installation:
${data.installation}


</html>`

    fs.writeFile(`${data.name.replace(/ /g, '')}.md`, html, (err) => console.log(err || 'success!'))

}

function renderLicenseBadge(license, github, title) {
    if (license !== "None") {
        return `[![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)](${generateProjectUrl(github, title)})`
    }
    return ''
}

init()