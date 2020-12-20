const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth.js');

const UserSchema  = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    username: {
        type: String,
        required: true,
        unique: true,
    },

    email: {
        type: String,
        required: true,
        lowercase: true,
    },

    password: {
        type: String,
        required: true,
    },

    createdAt:{
        type: Date,
        default: Date.now,
    },

    followers: [{type: mongoose.Schema.ObjectId, ref: 'User'}],
    following: [{type: mongoose.Schema.ObjectId, ref: 'User'}],
});

UserSchema.pre('save', async function hashPassword(next) {
    if(!this.isModified('password')) next();

    this.password = await bcrypt.hash(this.password, 8);

});

//aqui eu posso criar metodos, tal como o jwt e o camparehash usado no auth
UserSchema.methods = {
    compareHash(password){
        return bcrypt.compare(password, this.password);
    },

    generateToken(){
        return jwt.sign({id: this.id}, authConfig.secret, {
            //tempor para a expiração do token
            expiresIn: 86400,
        });
    },

};



mongoose.model('User', UserSchema);