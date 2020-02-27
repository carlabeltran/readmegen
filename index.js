//INITIALIZE PACKAGES
//////////////////////////////////////////////////////////////
//FILE SYSTEM
const fs = require("fs");
//COLLECTS USER DATA
const inquirer = require("inquirer");

//CONNECTS TO HTTP
const axios = require("axios");

//TO CLEAR TERMINAL SCREEN https://www.npmjs.com/package/clear
var clear = require('clear');
clear();
//CONFIGURATION .ENV
require("dotenv").config(); 

//////////////////////////////////////////////////////////////
inquirer
  .prompt([
    //THIS PROMPTS FOR AUTHOR NAME
    {
      type: "input",
      name: "author",
      message: "What is your name?"
    },
    //THIS PROMPTS FOR GITHUB USER NAME
    {
      type: "input",
      name: "username",
      message: "What is your GitHub username?"
    },
    {
      type: "input",
      name: "appWebsite",
      message: "What is your apps website?"
    },
    //THIS PROMPTS FOR THE PROJECT TITLE
    {
      type: "input",
      name: "title",
      message: "What is your project's title?"
    },
    //THIS PROMPTS FOR THE DESCRIPTION
    {
      type: "input",
      name: "description",
      message: "Please write a short description of your project:"
    },
    //THIS PROMPTS TO CHECK ALL ITEMS YOU WANT IN YOU TABLE OF CONTENTS
    {
      type: "checkbox",
      name: "tableofcontents",
      message: "What do you want to add in your Table of Contents?",
      choices: [
        "Description",
        "Demo",
        "User Story",
        "Business Context",
        "Technology",
        "Features",
        "Installation",
        "Configuration",
        "Usage",
        "Future Work",
        "Contributing",
        "Tests",
        "FAQS",
        "License",
        "Author"
      ],
      default: [
        "Description",
        "Demo",
        "User Story",
        "Business Context",
        "Technology",
        "Features",
        "Installation",
        "Configuration",
        "Usage",
        "Future Work",
        "Contributing",
        "Tests",
        "FAQS",
        "License",
        "Author"
      ],
    },
    //THIS PROMPTS FOR THE USER STORY
    {
      type: "input",
      name: "userstory",
      message: "Add user story to read me:"
    },
    //THIS PROMPTS FOR THE BUSINESS CONTEXT
    {
      type: "input",
      name: "businesscontext",
      message: "Add business context to read me:"
    },
    //THIS PROMPTS FOR TECHNOLOGYS USED
    {
      type: "checkbox",
      name: "technology",
      message: "What technologies did you use?",
      choices: ["HTML", "CSS", "JavaScript", "Jquery", "Node.js"],
      default: ["HTML", "CSS", "JavaScript", "Jquery", "Node.js"]
    },
    //THIS PROMPTS FOR ANY DEPENDENCIES
    {
      type: "checkbox",
      name: "dependencies",
      message: "What dependencies did you use?",
      choices: [
        { name: "axios" },
        { name: "boxen" },
        { name: "chalk" },
        { name: "dotenv" },
        { name: "electron" },
        { name: "inquirer" },
        { name: "open" },
        { name: "ora" },
      ]
    },
    //THIS PROMPTS FOR THE BUSINESS CONTEXT
    {
      type: "input",
      name: "installation",
      message: "List installation information:"
    },
    //THIS PROMPTS FOR THE BUSINESS CONTEXT
    {
      type: "input",
      name: "configuration",
      message: "List configuration information:"
    },
    //THIS PROMPTS FOR ANY TESTS THAT WERE RAN
    {
      type: "input",
      name: "futurework",
      message: "How could you improve this project?"
    },
    //THIS PROMPTS FOR ANY TESTS THAT WERE RAN
    {
      type: "input",
      name: "tests",
      message: "What command should be run inorder to run tests?"
    },
    //PROMPTS USER FOR ANY CONTRIBUTE INFORMATION
    {
      type: "input",
      name: "contribute",
      message: "What does the user need to know about contributing to the repo?"
    },
    //THIS PROMPTS THE USER FOR A LICENSE WITH ONLY 2 OPTIONS FOR NOW
    {
      type: "list",
      message: "What kind of license should your project have?",
      name: "license",
      choices: ["ISC", "MIT"],
      default: ["ISC"]
    },
    //PROMPTS USER FOR TAGS
    {
      type: "checkbox",
      name: "tags",
      message: "Would you like to add any tags?",
      choices: [
        "frontend",
        "backend",
        "security",
        "design",
        "process",
        "business",
        "markdown"
      ]
    },
  ]).then(function(userData) {
    
    //console.log(userData);
    
    const a1 = userData.author;
    const a2 = userData.license;
    const a3 = userData.tags;
    const a4 = userData.contribute;
    const a5 = userData.tests;
    const a6 = userData.dependencies;
    const a7 = userData.installation;
    const a8 = userData.configuration;
    const a9 = userData.description;
    const a10 = userData.features;
    const a11 = userData.userStory;
    const a12 = userData.futureWork;
    const a13 = userData.username;
    const a14 = userData.businesscontext;
    const a16 = userData.title;
    const a17 = userData.tableofcontents;
    const a18 = userData.appwebsite
    const clients = process.env.cs;
    const clienti = process.env.ci;
    const url = 'https://api.github.com/users/' + a13 + '?client_id=' + clienti + '&client_secret=' + clients
    
    axios.get(url).then(function(gitData) {
      
      console.log(gitData.data)
    
      let email = gitData.data.email
      let image = gitData.data.avatar_url
      let website = gitData.data.blog



    })

  });
