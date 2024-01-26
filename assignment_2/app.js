const express = require('express')

const app = express()

// Favicon route
app.get('/favicon.ico', (req, res) => {
    // handle favicon request to prevent double console logging
    res.status(204).end();
});

// app.use((req, res, next) => {
//     console.log('First Middleware')
//     next()
// })

// app.use((req, res, next) => {
//     console.log('Second Middleware')
//     res.send('<p>Assignment number 2</p>')
// })

//-----------------------------------------------------
//-----------------------------------------------------

// app.use((req, res, next) => {
//     console.log('Request URL:', req.url);
//     console.log('First Middleware');
//     next();
// });

// app.use((req, res, next) => {
//     console.log('Request URL:', req.url);
//     console.log('Second Middleware');
//     res.send('<p>Assignment number 2</p>');
// });

app.use('/users', (req, res, next) => {
    console.log('/users middleware')
    res.send('<p>The middleware that handles just /users</p>')
})

app.use('/', (req, res, next) => {
    console.log('/ middleware')
    res.send('<p>The middleware that handles just /</p>')
})


app.listen(3000)