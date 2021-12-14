'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class master_room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      master_room.hasOne(models.game_history, {
        foreignKey: 'id_room',
        as: 'master_room',
      })
    }
  }
  master_room.init(
    {
      nama_room: DataTypes.STRING,
      id_player_1: DataTypes.INTEGER,
      id_player_2: DataTypes.INTEGER,
      kode_unik: DataTypes.STRING,
      hasil_ronde_1: DataTypes.INTEGER,
      hasil_ronde_2: DataTypes.INTEGER,
      hasil_ronde_3: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'master_room',
    }
  )
  return master_room
}
