const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports.verifyToken = async(req, res, next) =>{
    const authHeader = req.headers.authorization;

    if(!authHeader) {
        console.log("Access Denied! Token required");
        return res.status(401).json({ message: "Access Denied!" });
    }
    
    const token = authHeader.split(" ")[1];
    try{
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user =  verified; // save user info for later use
        next();
    } catch(err){
        return res.status(400).json({ message: "Invalid Token!" });
    }

}