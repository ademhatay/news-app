const express = require('express')
const router = express.Router()

const { getFeeds, getFeed, createFeed} = require('../controller/FeedController');

router.get('/', getFeeds);

router.get('/:id', getFeed);

router.post('/', createFeed);


module.exports = router;
