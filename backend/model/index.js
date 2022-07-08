const mongoose = require('mongoose')

const streamerSchema = new mongoose.Schema({
    user: String,
    googleId: String,
    title: String,
    description: String
})

const Streamer = new mongoose.model('Streamer', streamerSchema)

module.exports = Streamer