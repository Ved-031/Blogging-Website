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
const loginUser = async (req, res) => {}


// Updating a user
const updateUser = async (req, res) => {}


// Deleting a user
const deleteUser = async (req, res) => {}


export { createUser, loginUser, updateUser, deleteUser }