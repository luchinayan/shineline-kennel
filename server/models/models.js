const sequelize = require('../db')
const {DataTypes} = require('sequelize')


const Emails = sequelize.define('emails', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  email: {type: DataTypes.STRING, unique: true},
})

const Images = sequelize.define('images', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  source: {type: DataTypes.STRING, unique: true},
  type: {type: DataTypes.STRING, unique: false},
})


const Info = sequelize.define('infos', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  textru: {type: DataTypes.STRING},
  texten: {type: DataTypes.STRING},
  dog_name: {type: DataTypes.STRING}
})

const Admins = sequelize.define('admins', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true},
  password: {type: DataTypes.STRING}
})


Info.hasMany(Images)
Images.belongsTo(Info)

module.exports = {
  Admins, Images, Info, Emails
}
