var express = require('express')
var router = express.Router()

//controllers
const game = require('../controllers/gameController')

/* GAME Routes */

router.get('/', game.pageGame)

module.exports = router
