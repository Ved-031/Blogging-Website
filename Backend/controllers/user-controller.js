import UserModel from "../models/userModel.js";6
import validator from 'validator';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import errorHandler from "../utils/error.js";

// Creating a user
const createUser = async (req, res, next) => {

    let { username, email, password } = req.body;

    try {

        // Checking if the user already exsits
        const exists = await UserModel.findOne({email: email});
        if(exists){
            next(errorHandler(400, "User already registered"));
        }

        // Checking the empty fields
        if(!username || !email || !password || username === "" || email === "" || password === ""){
            next(errorHandler(400, "All fields are required!"));
        }

        // Validating email
        const result = validator.isEmail(email);
        if(!result){
            next(errorHandler(400, "Please enter valid email"));
        }

        // Validating password
        if(password.length <= 7){
            next(errorHandler(400, "Password should be atleast of 8 characters"));
        }

        // Hashing the password
        const hashedPassword = bcryptjs.hashSync(password, 10);
        
        // Creating a user
        const user = new UserModel({
            username,
            email,
            password: hashedPassword,
        })
        await user.save();
        res.status(200).json({success: true, message: "SignUp successfull"});

    } catch (error) {
        next(error);
    }
}

// Login in a user
const loginUser = async (req, res, next) => {

    let { email, password } = req.body;

    try {

        // Checking the empty fields 
        if(!email || !password || email === '' || password === ''){
            return next(errorHandler(400, "All fields are required!"));
        }

        // Finding user from db
        const user = await UserModel.findOne({email});

        // Checking if user exists
        if(!user){
            return next(errorHandler(404, "User not found"));
        }

        // Comparing password
        const isMatch = await bcryptjs.compareSync(password, user.password);
        if(isMatch === false){
            return next(errorHandler(404, "Invalid password"));
        }

        // Creating a token and setting up a cookie
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET_KEY);
        const { password: pass, ...rest } = user._doc;
        res
        .status(200)
        .cookie('token', token, {
            httpOnly: true,
        })
        .json(rest);

    } catch (error) {
        next(error);
    }
}

// Signin a user with Google
const googleUser = async (req, res, next) => {

    let { name, email, googlePhotoURL } = req.body;

    try {
        
        // Checking if user exsits
        const user = await UserModel.findOne({email});
        if(user){

            const token = jwt.sign({id: user._id}, process.env.JWT_SECRET_KEY);
            const { password, ...rest} = user._doc;
            res
            .status(200)
            .cookie('token', token, {
                httpOnly: true,
            })
            .json(rest);

        }else{

            // Generating random password
            const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);

            // Hashing generated password
            const hashedPassword = await bcryptjs.hashSync(generatedPassword, 10);

            // Creating a new user
            const newUser = new UserModel({
                username: name.toLowerCase().split(' ').join('') + Math.random().toString(9).slice(-4),
                email,
                password: hashedPassword,
                profilePicture: googlePhotoURL,
            })
            await newUser.save();

            // Setting up a token
            const { password, ...rest } = newUser._doc;
            const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET_KEY);
            res.status(200).cookie('token', token, {httpOnly: true}).json(rest);
        }

    } catch (error) {
        next(error);
    }

}

export { createUser, loginUser, googleUser }