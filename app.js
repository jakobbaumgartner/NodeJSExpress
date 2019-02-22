const http = require('http')

const express = require('express')

//Express izvozi funkcijo, ki jo nato izvedemo:
const app = express()

//Napisati moramo "middleware" funkcijo, ki se izvede pri vseh requestih na server
app.use((req, res, next) => {
    console.log("logged!")
    next()
    //ker kličemo next, se bo izvedel tudi naslednji "middleware"
})

app.use((req, res, next) => {
    console.log('pa še to!')
    res.send('<h1>Some response text!</h1>')
    //Express auto doda httpheader in zaključi response pošiljanje
})

const server = http.createServer(app)

server.listen(3000)



