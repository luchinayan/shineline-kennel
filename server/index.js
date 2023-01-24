require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const cors = require('cors')
const router = require('./routes/index')
const path = require('path')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')


const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', router)
app.use(errorHandler)
app.use(express.static(path.join(__dirname,'client/out')))
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname,'client/.next')))
}
const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => {
            console.log('working on port = ', PORT)
        })
    } catch (err) {
        console.log(err)
    }
}

start()
