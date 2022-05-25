# Text-Editor-PWQ

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

1. [Objective](#objective)
2. [Acceptance Criteria](#acceptance-criteria)
3. [Installation Instructions](#installation-instructions)
4. [Visuals](#visuals)
5. [Github Repository](#github-repository)
6. [Acknowledgments](#acknowledgments)

## Objective

Your task is to build a text editor that runs in the browser.

- Single-page application that meets the PWA criteria.
- Feature a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser.
- Functional offline.
- Start with an existing application and implement methods for getting and storing data to an IndexedDB database
- Use package called `idb`
- deploy this full-stack application to Heroku

## Acceptance Criteria

```md
WHEN I open my application in my editor
THEN I should see a client server folder structure

WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client

WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack

WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file

WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors

WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage

WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB

WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB

WHEN I click on the Install button
THEN I download my web application as an icon on my desktop

WHEN I load my web application
THEN I should have a registered service worker using workbox

WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets

WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application
```

## Installation Instructions

`npm i` to install
`npm start` to start

## Visuals
![Screen Shot 2022-05-24 at 11 51 22 PM (3)](https://user-images.githubusercontent.com/100983245/170176007-600651ea-7c33-4bfc-96c0-7e1ca42dcaca.png)

## Github Repository

[Github Repository](https://github.com/choilina16/Text-Editor-PWQ)
[Heroku Developed Link](https://gentle-fortress-70039.herokuapp.com/)

## Acknowledgments

Showing appreciation to our study group!

- Anthony Chang
- James Edwards
- Noah Brunner
- Seamona Stewart
