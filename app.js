const express = require('express')
const app = express()
const port = 8000
const tasks = require('./routes/tasks')
require('./db/connect')
app.use(express.static('./public'))
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler')


// middleware
app.use(express.json())

//routes
app.get('/Home', (req, res) => {
    res.send('Todo App')
})


app.use('/api/v1/tasks', tasks)

app.listen(port, console.log(`The Server is started at http://localhost:${port}`))