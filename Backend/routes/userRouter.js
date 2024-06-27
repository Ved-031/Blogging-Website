import express from 'express';
import { createUser, googleUser, loginUser } from '../controllers/user-controller.js';

const userRouter = express.Router();

userRouter.post('/create', createUser);
userRouter.post('/login', loginUser);
userRouter.post('/google', googleUser);

export default userRouter