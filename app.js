var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

const app = express()
const session = require('express-session')
const flash = require('express-flash')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

//setting session
app.use(
  session({
    secret: 'ini rahasia',
    resave: false,
    saveUninitialized: false,
  })
)

//setting passport.js
const passport = require('./lib/passport')
app.use(passport.initialize())
app.use(passport.session())

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//setting flash
app.use(flash())

// import routes
var authRouter = require('./routes/auth')
var userRouter = require('./routes/user')
var gameRouter = require('./routes/game')

app.use('/', authRouter)
app.use('/user', userRouter)
app.use('/game', gameRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
