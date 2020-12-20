const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth.js');
const { promisify } = require('util');

module.exports = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401),json({ error: 'No token provided'});
    }

    const parts = authHeader.split(' ');

    if(!parts.length === 2){
        return res.status(401).json({error: 'Token error'});
    }

    const [scheme, token] = parts;

    if(scheme === 'bearer'){
        return res.status(401).json({error: 'Token malformated'});
    }

    try{
        const decoded = await promisify(jwt.verify)(token, authConfig.secret);

        req.userId = decoded.id;

        return next;
    } catch(err){
        return res.send(401).json({error: 'Token invalid'});
    }
};

