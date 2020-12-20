const mongoose = require('mongoose');

const TweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        trim: true,
        maxlength: 280
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true,
    },
    likes: [{type: mongoose.Schema.ObjectId, ref: 'User'}],
    createAt:{
        type: Date,
        default: Date.now,
    },
});

mongoose.model('Tweet', TweetSchema);