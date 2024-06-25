import express from 'express';

// App config
const app = express();
const PORT = 3000;

//Middlewares
app.use(express.json());

// API endpoints
app.get('/', (req, res)=>{
    res.send("Hello World");
})

// Server Running at 3000 port
app.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`);
});