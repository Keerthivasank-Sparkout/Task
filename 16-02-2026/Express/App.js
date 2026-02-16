const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const app = express()
const PORT = 3000;

//middelware
app.use((req, res, next) => {
    console.log(req.host)
    console.log(req.method)
    console.log(req.path)
    next();
})

app.use((req, res, next) => {
    if (fs.existsSync('./log/log.txt')) {
        fs.appendFile('./log/log.txt', morgan('dev'), (err) => {
            if (err) {
                console.log(err.message)
            }
        })
    }
    else {
        fs.writeFile('./log/log.txt', morgan('dev'), (err) => {
            if (err) {
                console.log(err.message)
            }
        })
    }
})

app.get('/', (req, res) => {
    res.status(200).sendFile('./pages/home.html', { root: __dirname });
})

app.get('/about', (req, res) => {
    res.status(200).sendFile('./pages/about.html', { root: __dirname })
})

app.get('/contact', (req, res) => {
    res.status(200).sendFile('./pages/contact.html', { root: __dirname })
})

app.use((req, res) => {
    res.status(404).sendFile('./pages/error.html', { root: __dirname })
})

app.listen(PORT, () => {
    console.log(`Server running on the Port:${PORT}`)
})
