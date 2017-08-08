const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express()
const router = require('./router')
const mongoose = require('mongoose').set('debug', true)
const cors = require('cors')
const config = require('./config')

mongoose.connect(config.getDbConnectionString(), err => {
    if (err) throw err
})

router(app)

