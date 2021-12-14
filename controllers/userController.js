const { master_room } = require('../models')

module.exports = {
  /* === DASHBOARD === */

  pageDashboard: (req, res) => {
    res.render('User/Dashboard/index', { title: 'Dashboard User' })
  },

  // allHistoryFight: async (req, res) => {
  //   let data = await master_room.findAll({
  //     where: { id_player_1: req.user.dataValues.id },
  //   })
  // },

  /* === MAKE ROOM === */

  pageMakeRoom: (req, res) => {
    res.render('User/MakeRoom/index', { title: 'Dashboard User' })
  },

  createRoom: async (req, res) => {
    const nama_room = req.body.nama_room
    let randomKode = Math.floor(Math.random() * 1000)
    let kode_unik = nama_room[0] + nama_room[nama_room.length - 1] + randomKode

    // console.log(nama_room, kode_unik)

    await master_room
      .create({
        nama_room,
        id_player_1: req.user.dataValues.id,
        id_player_2: null,
        kode_unik,
        hasil_ronde_1: null,
        hasil_ronde_2: null,
        hasil_ronde_3: null,
      })
      .then((result) => {
        res.render('User/MakeRoom/index', {
          title: 'Dashboard User',
          kode_unik,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  },

  /* === INPUT ROOM === */
  pageInputRoom: (req, res) => {
    res.render('User/InputRoom/index', { title: 'Dashboard User' })
  },
}
