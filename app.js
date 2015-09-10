require("babel/register");

var path = require('path'),
    chalk = require('chalk'),
    menu = require(path.join(__dirname, '/lib/node-menu/lib/nodemenu.js'));

menu.addDelimiter('*', 55, chalk.green(' Select a sorting algorithm '));

menu.addItem(
    chalk.blue('Bubble Sort'),
    function(elements) {
        require(path.join(__dirname, '/bubbleSort'))(elements);
    },
    null,
    [
        {'name': '', 'type': 'numeric'}
    ]);

menu.addItem(
    chalk.green.dim('Insertion Sort'),
    function(elements) {
        require(path.join(__dirname, '/insertionSort'))(elements);
    },
    null,
    [
        {'name': '', 'type': 'numeric'}
    ]);

menu.addItem(
    chalk.red('Selection Sort'),
    function(elements) {
        require(path.join(__dirname, '/selectionSort'))(elements);
    },
    null,
    [
        {'name': '', 'type': 'numeric'}
    ]);

menu.start();
