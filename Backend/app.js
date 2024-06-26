import express from 'express';
import connectDB from './config/db.js';
import cors from 'cors';
import userRouter from './routes/userRouter.js';
import 'dotenv/config';

// App config
const app = express();
const PORT = 3000;

// Middlewares
app.use(express.json());
app.use(cors());

// Connect DB
connectDB();

// API endpoints
app.use('/api/user', userRouter);

// Server Running at 3000 port
app.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`);
});