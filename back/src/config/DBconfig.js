const mongoose = require('mongoose');
require('dotenv').config()

const URI_DB = `mongodb+srv://${process.env.user}:${process.env.password_db}@cluster0prueba.vq9vv.mongodb.net/prueba`
const dbConfig = async () => {
    await mongoose.connect(URI_DB)
}

module.exports = dbConfig;