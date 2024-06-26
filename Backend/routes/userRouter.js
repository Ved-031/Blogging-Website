import express from 'express';
import { createUser, deleteUser, loginUser } from '../controllers/user-controller.js';

const userRouter = express.Router();

userRouter.post('/create', createUser);
userRouter.post('/login', loginUser);
userRouter.post('/delete', deleteUser);

export default userRouter