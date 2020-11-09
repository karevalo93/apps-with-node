const fs = require('fs');
const chalk = require('chalk')

const getNotes = function () {
    return 'Your notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicatesNote = notes.find((note) => note.title === title)

    if (!duplicatesNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note addes!'))
    }
    else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch (e) {
        return []
    }
}

const removeNotes = (title) => {
    const notes = loadNotes()

    const keep = notes.filter((note) => note.title != title)

    if (keep.length < notes.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(keep)
    }
    else {
        console.log(chalk.red.inverse('Note not found!'))
    }

}

const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.inverse('Your notes'))

    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()

    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.blue(note.title))
        console.log(note.body)
    }
    else {
        console.log(chalk.red('Not found'))
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNotes,
    listNotes: listNotes,
    readNote: readNote
}