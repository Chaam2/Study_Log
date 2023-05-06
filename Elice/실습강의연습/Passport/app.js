const express = require('express')
const mongoose = require('mongoose')
const expressLayouts = require('express-ejs-layouts')
const passport = require('passport')
const session = require('express-session')
const app = express()

app.use(express.static('public'))
require('./config/passport')(passport)
/* 이거랑 똑같음
const pass = require('./config/passport')
pass(passport)
*/

const db = require('./config/keys').mongoURI

mongoose

