const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");

exports.protect = async function(req,res,next){
    let token;
    if ( req.headers.authorization ) {
        try{
        token = req.headers.authorization;
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id);
        next();

    } catch (error) {
        res.status(401).json({
            message: "Invalid token"
        });
    }
}

    if(!token){
        res.status(401).json({
            message:"you are not authorized"
        })
    }
}
