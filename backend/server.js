import express from 'express';
import dotenv from "dotenv";
import cookieParser from 'cookie-parser'

import authRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.route.js';
import userRoutes from "./routes/user.route.js";
import connectToMongoDB from './db/connectToMongoDB.js';

const app = express();
const PORT = process.env.PORT || 5000;


dotenv.config();

app.use(express.json()); // to parse incoming request with JSON payloads (from req.body)
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);

app.get('/', (req, res) => {
    // root route http://localhost:5000
    res.send("Welcome to my API!")
});


app.listen(PORT, () =>{
    connectToMongoDB();
    console.log(`server is running on port ${PORT}`);  
}) 