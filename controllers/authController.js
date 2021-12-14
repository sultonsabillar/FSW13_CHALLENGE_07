// impor model
const { users, user_biodata } = require('../models')
const passport = require('../lib/passport')

module.exports = {
  pageLogin: (req, res) => {
    res.render('Auth/login', { title: 'Login' })
  },

  pageRegister: (req, res) => {
    res.render('Auth/register', { title: 'Register' })
  },

  registerUser: (req, res, next) => {
    users
      .register(req.body)
      .then((result) => {
        user_biodata.create({
          nama: req.body.nama,
          alamat: req.body.alamat,
          notelp: req.body.notelp,
          id_user: result.id,
        })
        res.json({
          message: 'berhasil memasukkan data',
          data: req.body,
        })
      })
      .catch((err) => next(err))
  },

  loginUser: passport.authenticate('local', {
    successRedirect: '/user/dashboard',
    failureRedirect: '/login',
    failureFlash: true,
  }),
}
