import express from 'express';
import connectDB from './config/db.js';
import cors from 'cors';
import userRouter from './routes/userRouter.js';
import cookieParser from 'cookie-parser';
import 'dotenv/config';

// App config
const app = express();
const PORT = 3000;

// Middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Connect DB
connectDB();

// API endpoints
app.use('/api/user', userRouter);

// Error Handler 
app.use((error, req, res, next) => {
    const statusCode = error.statusCode || 500;
    const message = error.message || "Intenal server error.";
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});

// Server Running at 3000 port
app.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`);
});