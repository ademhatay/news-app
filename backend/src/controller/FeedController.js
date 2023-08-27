const Feed = require('../model/feed');

// All feeds
const getFeeds = async (req, res) => {
    const searchText = req.query.search; 

    try {
        let feeds = await Feed.find();

        if (searchText) {
            feeds = feeds.filter(feed => feed.title.toLowerCase().includes(searchText.toLowerCase()));
        }

        res.json(feeds);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
}

// Single feed
const getFeed = async (req, res) => {
    try {
        const feed = await Feed.findById(req.params.id);
        res.json(feed);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
}

// Create feed
const createFeed = async (req, res) => {
    const feed = new Feed({
        id: req.body.id,
        title: req.body.title,
        desc: req.body.desc,
        image: req.body.image,
        author: req.body.author,
        authorImage: req.body.authorImage,
        popular: req.body.popular,
        date: req.body.date,
        lang: req.body.lang,
        main: req.body.main,
        feed: req.body.feed,
        banner: req.body.banner,
        last: req.body.last
    });
}

module.exports = {
    getFeeds,
    getFeed,
    createFeed
}
