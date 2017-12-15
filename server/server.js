const express = require('express')
const app = express()
const fs = require('fs')
const cors = require('cors')

const words = JSON.parse(fs.readFileSync('words.json'))
const questions = JSON.parse(fs.readFileSync('questions.json'))
app.use(cors())

app.get('/', (req, res) => {
    res.sendStatus(200)
})

app.get('/questions', (req, res) => {
    res.send(getRndQuestions(3))
})

app.listen(3008, () => {
    console.log("listening", questions)
})

const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRndWords = size => {
    let newWords = []
    for (let i = 0; i < size; i++) {
        newWords.push(words[getRndInteger(0, words.length - 1)])
        //words[i].Pregunta = "Qué tal, lokis?"
    }
    return newWords
}

const getRndQuestions = size => {
    let wordAux = getRndWords(size)
    let newWords = []
    let res = []
    newWords = wordAux.slice(0, size).concat(wordAux.slice(0, size).concat(wordAux.slice(0, size)))
    for (let i = 0; i < newWords.length; i++) {
        let newObj = {
            Pregunta: questions[getPregunta(i, size)],
            Palabra: newWords[i].Palabra,
            Flibros: newWords[i].Flibros,
            Fsubtitulos: newWords[i].Fsubtitulos,
            Tipo: newWords[i].Tipo
        }
        res.push(newObj)
    }

    return res
}
const getPregunta = (i, size) => {
    if (i < size) return 0
    if (i >= size && i < size * 2) return 1
    if (i >= size * 2 && i < size * 3) return 2
}
