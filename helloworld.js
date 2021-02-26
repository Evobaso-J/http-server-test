const express = require('express')
const app = express()
const port = 4000

//Helloworld with GET method route
app.get('/provaget', (req,res) => {
    res.send('Hello World - GET')
})


//TESTS ON STRING PATHS BASED ON STRING MODELS

//ab?cd
app.get('/prova?get1', (req,res) => {
    res.send('Hello World - prova?get1 = provget1, provaget1')
})

//ab+cd
app.get('/prova+get2', (req,res) => {
    res.send('Hello World - prova+get2 = provaget2, provaaget2, provaaaget2, ...')
})

//ab*cd
app.get('/prova*get3', (req,res) => {
    res.send('Hello World - prova*get3 = provaget3, provaANYTHINGget3, provaL1t3rally@nyth1ngget3')
})

//TEST ON STRING PATHS BASED ON REGULAR EXPRESSIONS

// /a/
app.get(/4/, (req,res) => {
    res.send('Hello World - /4/ = any url that contains a 4')
})

// /.*string$/
app.get(/.*fly$/, (req,res) => {
    res.send('Hello World - /.*fly$/ = any url that ends with "fly"')    
})

//Helloworld with POST method route
app.post('/provapost', function (req,res) {
    res.send('Hello World - POST')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})