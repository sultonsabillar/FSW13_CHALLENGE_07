var express = require('express')
var router = express.Router()

//controllers
const auth = require('../controllers/authController')

/* AUTH Routes */

/* === LOGIN === */
router.get('/login', auth.pageLogin)
router.post('/login', auth.loginUser)

/* === REGISTER === */
router.get('/register', auth.pageRegister)
router.post('/register', auth.registerUser)

/* === REGISTER ADMIN === */

module.exports = router
