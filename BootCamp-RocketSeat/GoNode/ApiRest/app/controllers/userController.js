const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports = {
    async me (req, res, next){
        try {
            const user = await User.findById(req.userId);
            const tweetCount = await Tweet.find({user: user.id}).count();

            return res.json({
                user,
                tweetCount,
                followersCount: user.followers.length,
                followingCount: user.following.length,
            });
        } catch (err) {
            return next(err);
        }
    },

    async feed(req, res, next){
        try {
            const user = await User.findById(req.userId);
            const { following } = user;

            //sempre que for pegar o objeto(letra maiúscula) 
            //e instanciá-lo  deve usar o await const tweets = await Tweet
            const tweets = await Tweet
                .find({
                    user: { $in: [user.id, ...following]},
                })
                .limit(50)
                .sort('-createdAt');

                return res.json(tweets);
        } catch (err) {
            return next(err);
        }
    },

    async update(req, res, next){
        try {
            const id = req.userId;
            const {name, username, password, confirmPassword } = req.body;

            if(password && confirmPassword !== confirmPassword){
                return res.status(400).json({error: 'Password doesn\'t match '});
            }

            const user = await User.findByIdAndUpdate(id, {name, username}, {new:true});

            if(password){
                user.password = password;
                await user.save();
            }

            return res.json(user);
        } catch (err) {
            return next(err);
        }
    },
};