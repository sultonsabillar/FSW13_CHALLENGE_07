'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('master_rooms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_room: {
        type: Sequelize.STRING
      },
      id_player_1: {
        type: Sequelize.INTEGER
      },
      id_player_2: {
        type: Sequelize.INTEGER
      },
      kode_unik: {
        type: Sequelize.STRING
      },
      hasil_ronde_1: {
        type: Sequelize.INTEGER
      },
      hasil_ronde_2: {
        type: Sequelize.INTEGER
      },
      hasil_ronde_3: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('master_rooms');
  }
};