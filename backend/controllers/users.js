const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const signUp = async (req, res) =>{
    let { username, email, password } = req.body;
    try{
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({ message: "User Already Exists"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        return res.status(201).json({ message: "User Created Successfully!" });

    } catch(err){
        return res.status(500).json({ error: err.message });
    }
};


const login = async (req, res) =>{
    try{
        const { username, email, password } = req.body;

        const loginValue = username || email;

        if(!loginValue || !password) {
            return res.status(400).json({ message: "Invalid username / password" });
        } 

        
        const existingUser = await User.findOne({
            $or: [
                { username: loginValue },
                { email: loginValue },
            ]
        });

        if(!existingUser) return res.status(404).json({ message: "User Not Found" });

        const isMatch = await bcrypt.compare(password, existingUser.password);

        if(!isMatch) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        const token = jwt.sign(
            { id: existingUser._id, email: existingUser.email }, 
            process.env.JWT_SECRET,
            { expiresIn: '1d' },
        );

        // console.log("Token Recieved :" , token);
        return res.status(200).json({ message: "Login Successful!", token });

    } catch(err){
        return res.status(500).json({ error: err.message });
    }
};


const getUsers = async(req, res) =>{
    try{

        const users = await User.find().select('-password');

        return res.status(200).json({ users });

    } catch(err){
        return res.status(500).json({ error: err.message });
    }
};


const getUserById = async(req, res) =>{
    try{
        let { id } = req.params;
        const user = await User.findById(id).select('-password');

        if(!user){
            return res.status(404).json({
                message: "User Not Found!"
            });
        }

        return res.status(200).json(user);

    } catch(err){
        return res.status(500).json({ error: err.message });
    }
};


module.exports = { signUp, login, getUsers, getUserById };