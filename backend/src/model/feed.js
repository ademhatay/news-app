const mongoose = require('mongoose');

const feedSchema = new mongoose.Schema({
    id: Number,
    title: String,
    desc: String,
    image: String,
    author: String,
    authorImage: String,
    popular: Boolean,
    date: Date,
    lang: String,
    main: Boolean,
    feed: String,
    banner: Boolean,
    last: Boolean
}, {
    timestamps: true
});


const Feed = mongoose.model('Feed', feedSchema);

module.exports = Feed;
