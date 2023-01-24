const {Images, Info} = require("../models/models")
const ApiError = require("../error/ApiError")
const {Sequelize} = require("sequelize")

class ImageController {
  async getImageById(req, res, next) {
    try {
      const {id} = req.params
      const image = await Images.findOne({where: {id: id}})
      return res.json(image)
    } catch (e) {
      next(ApiError.badRequest(e))
    }
  }

  async getAllImages(req, res, next) {
    try {
      const Op = Sequelize.Op
      if (req.query.type) {
        const images = await Images.findAll({
          where: {
            type: {
              [Op.like]: `${req.query.type}%`
            }
          }, include: [Info]
        })
        return res.json(images)
      } else {
        const images = await Images.findAll()
        return res.json(images)
      }

    } catch (e) {
      next(ApiError.badRequest(e))
    }
  }

  async createImage(req, res, next) {
    try {
      const {source, sectionId, infoId, type} = req.body
      const image = await Images.create({source, sectionId, infoId, type})
      return res.json(image)
    } catch (e) {
      next(ApiError.badRequest(e))
    }
  }
}

module.exports = new ImageController()
