import UserModel from "../models/userModel.js";6
import validator from 'validator';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Creating a user
const createUser = async (req, res) => {

    let { username, email, password } = req.body;

    try {

        // Checking if the user already exsits
        const exists = await UserModel.findOne({email: email});
        if(exists){
            return res.status(400).json({success: false, message: "User already registered"});
        }

        // Checking the empty fields
        if(!username || !email || !password || username === "" || email === "" || password === ""){
            return res.status(400).json({success: false, message: "All fields all required"});
        }

        // Validating email
        const result = validator.isEmail(email);
        if(!result){
            return res.status(400).json({success: false, message: "Please enter valid email"});
        }

        // Validating password
        if(password.length <= 7){
            return res.status(400).json({success: false, message: "Password should be at least of 8 characters"});
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
        console.log(error);
        res.status(500).json({success: false, message: "Error"});
    }
}


// Login in a user
const loginUser = async (req, res) => {}


// Updating a user
const updateUser = async (req, res) => {}


// Deleting a user
const deleteUser = async (req, res) => {}


export { createUser, loginUser, updateUser, deleteUser }