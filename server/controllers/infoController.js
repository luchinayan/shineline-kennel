const {Info} = require("../models/models")
const ApiError = require("../error/ApiError")

class InfoController {
  async getInfoById(req, res, next) {
    try {
      const {id} = req.params
      const info = await Info.findOne({where: {id: id}})
      return res.json(info)
    } catch (e) {
      next(ApiError.badRequest(e))
    }
  }

  async getInfos(req, res, next) {
    try {
      if (req.query.id) {
        const infos = await Info.findAll({where: {id: [req.query.id]}})
        return res.json(infos)
      } else {
        const infos = await Info.findAll()
        return res.json(infos)
      }

    } catch (e) {
      next(ApiError.badRequest(e))
    }
  }

  async createInfo(req, res, next) {
    try {
      const {textru, texten, dog_name} = req.body
      const info = await Info.create({textru, texten, dog_name})
      return res.json(info)
    } catch (e) {
      next(ApiError.badRequest(e))
    }
  }

}

module.exports = new InfoController()
