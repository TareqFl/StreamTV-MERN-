const router = require('express').Router();

const Streamer = require('../model')

const dbController = require('../controllers/db')

router.get('/', dbController.getStream)


router.post('/', dbController.makeStream)



router.post('/streamer', dbController.getStreamer)

router.post('/edit', dbController.editStream)


module.exports = router;