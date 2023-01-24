const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const ApiError = require('../error/ApiError');
const {Admins} = require('../models/models')

const generateJwt = (id, name) => {
    return jwt.sign(
        {id, name},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class AdminController {
    async registration(req, res, next) {
        const {name, password} = req.body

        if (!name || !password) {
            return next(ApiError.badRequest('Incorrect name or password'))
        }
        const existedName = await Admins.findOne({where: {name}})
        if (existedName) {
            return next(ApiError.badRequest('Name already exist'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const admin = await Admins.create({name, password: hashPassword})
        const token = generateJwt(admin.id, admin.name)
        res.json({token})
    }

    async login(req, res, next) {
        const {name, password} = req.body
        const admin = await Admins.findOne({where: {name}})
        if (!admin) {
            return next(ApiError.internal('Incorrect name'))
        }
        const comparePasswords = bcrypt.compareSync(password, admin.password)
        if (!comparePasswords) {
            return next(ApiError.internal('Incorrect password'))
        }
        const token = generateJwt(admin.id, admin.name)
        res.json({token})
    }

    async check(req, res) {
        console.log(req.user)
        //
        // const token = generateJwt(req.admin.id, req.admin.name)
        return res.json('123')
    }
}

module.exports = new AdminController()
