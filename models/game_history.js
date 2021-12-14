'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class game_history extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      game_history.belongsTo(models.users, {
        foreignKey: 'id_user',
        as: 'user_biodata',
      }),
        game_history.belongsTo(models.master_room, {
          foreignKey: 'id_room',
          as: 'master_room',
        })
    }
  }
  game_history.init(
    {
      point: DataTypes.INTEGER,
      total_play: DataTypes.INTEGER,
      id_user: DataTypes.INTEGER,
      id_room: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'game_history',
    }
  )
  return game_history
}
