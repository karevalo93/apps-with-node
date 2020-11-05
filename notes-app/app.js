const validator = require('validator')
const chalk = require('chalk');
const getNotes = require('./notes.js')
const yargs = require('yargs');
const { demandOption } = require('yargs');


//const note = getNotes(process.argv[2])
//console.log(note)
//console.log(validator.isURL('example.com'))
//console.log(chalk.red.bold('Error!'));
//console.log(chalk.blue('Hello') + chalk.yellow(' World') + chalk.red('!'));

yargs.command({
    command: 'add',
    describe: 'Add new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Body note',
            demandOption: true,
            type: 'string',
        },
    },
    handler: function (argv) {
        console.log('Title: ' + argv.title);
        console.log('Body: ' + argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove a note',
    handler: function () {
        console.log('removing note')
    }
})

yargs.command({
    command: 'list',
    describe: 'show a list of notes',
    handler: function () {
        console.log('list all notes');
    }
})

yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: function () {
        console.log('description of note')
    }
})


yargs.parse()