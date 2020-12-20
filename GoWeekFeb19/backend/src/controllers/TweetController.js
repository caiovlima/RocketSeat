const Tweet = require('../models/Tweet');

module.exports = {
    async index(req, res){
        const tweets = await Tweet.find({}).sort('-createdAt');

        return res.json(tweets);
    },

    async store(req, res){
        const tweet = await Tweet.create(req.body);

        req.io.emit('tweet', tweet);

        return res.json(tweet);
    },

    async update(req, res){
        const tweet = await Tweet.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(tweet);

    },

    async show(req, res){
        const tweet = await Tweet.findById(req.params.id);

        return res.json(tweet);
    },

    async destroy(req, res){
        const tweet = await Tweet.findByIdAndRemove(req.params.id);

        return res.send();
    }
};