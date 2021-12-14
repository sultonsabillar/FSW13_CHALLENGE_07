'use strict'
const { Model } = require('sequelize')

//import bcrypt
const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      users.hasOne(models.user_biodata, {
        foreignKey: 'id_user',
        as: 'user_biodata',
      })
    }

    //enkripsi password untuk register
    static #encrypt = (password) => bcrypt.hashSync(password, 10)

    //register
    static register = ({ username, password, email }) => {
      const encryptedPassword = this.#encrypt(password)
      return this.create({
        username,
        email,
        password: encryptedPassword,
        isAdmin: false,
      })
    }

    //login
    checkPassword = (password) => bcrypt.compareSync(password, this.password)

    static authenticate = async ({ username, password }) => {
      try {
        const user = await this.findOne({ where: { username } })
        if (!user) return Promise.reject('User not found!')
        const isPasswordValid = user.checkPassword(password)
        if (!isPasswordValid) return Promise.reject('Wrong password')
        return Promise.resolve(user)
      } catch (err) {
        return Promise.reject(err)
      }
    }
  }
  users.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      isAdmin: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'users',
    }
  )
  return users
}
