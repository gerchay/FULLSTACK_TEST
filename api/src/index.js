const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(morgan('dev'))
app.use(require('./routes/index'))

app.listen(3000, () => console.log('Server on port 3000'))
