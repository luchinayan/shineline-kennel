const {Emails} = require('../models/models')
const ApiError = require('../error/ApiError')

class EmailController {

  async getAllEmails(req, res, next) {
    try {
      const infos = await Emails.findAll()
      return res.json(infos)
    } catch (e) {
      next(ApiError.badRequest(e))
    }

  }

  async createEmail(req, res, next) {
    try {
      const {email} = req.body
      const mail = await Emails.create({email})
      return res.json(mail)
    } catch (e) {
      next(ApiError.badRequest(e))
    }

  }


}

module.exports = new EmailController()
