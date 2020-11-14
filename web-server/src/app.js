const path = require('path')
const express = require('express')

console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

app.get('/', (req, res) => {
    res.send('Hellos Express!')
})

app.get('/weather', (req, res) => {
    res.send({
        location: 'Philadelphia',
        weather: 'It is sunny'
    })
})


app.get('/about', (req, res) => {
    res.send('<h1>About</h1>')
})

app.get('/help', (req, res) => {
    res.send([{
        name: 'Kevin',
        age: 20
    }, {
        name: 'Juan',
        age: 15
    }])
})


app.listen(3000, () => {
    console.log('listening on port 3000')
}) 
