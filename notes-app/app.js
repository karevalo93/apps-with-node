const notes = require('./notes.js')
const yargs = require('yargs');

yargs.version('16.1.0')


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
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'show a list of notes',
    handler() {
        notes.listNotes();
    }
})

yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})


yargs.parse()