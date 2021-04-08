const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors({ origin: true }))
app.use(morgan('dev'))
app.use(require('./routes/index'))

app.listen(5000, () => console.log('Server on port 5000'))
