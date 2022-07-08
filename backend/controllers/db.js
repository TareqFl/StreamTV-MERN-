
const Streamer = require('../model')

exports.getStream = async (req, res) => {

    try {
        const response = await Streamer.find()
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


exports.makeStream = async (req, res) => {
    try {

        Streamer.findOne({ title: req.body.title }, (err, doc) => {
            if (err) {
                res.status(200).json({ message: err.message })
            }
            if (doc) {
                res.status(200).json(doc)
            }
            if (!doc) {
                const newStreamer = new Streamer(req.body)
                newStreamer.save()
                res.status(200).json(newStreamer)
            }
        })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

exports.getStreamer = async (req, res) => {

    const { googleId } = req.body


    try {
        const response = await Streamer.findOne(({ googleId }))
        if (!response) {
            res.status(200).json({ id: 0 })

        }
        if (response) {
            res.status(200).json(response)

        }

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

exports.editStream = async (req, res) => {
    const { googleId } = req.body
    const input = {
        title: req.body.title,
        description: req.body.description
    }
    Streamer.findOneAndUpdate({ googleId }, { ...input }, (err, doc) => {
        if (err) {
            res.status(404).json({ message: err.message })
        }
        if (doc) {
            res.status(200).json(doc)
        }
    })

}