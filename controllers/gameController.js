exports.pageGame = (req, res) => {
  const dataImgs = [
    { img: '/assets/chapter-04/batu.png' },
    { img: '/assets/chapter-04/kertas.png' },
    { img: '/assets/chapter-04/gunting.png' },
  ]

  res.render('Game/index', { title: 'Game', dataImgs })
}
