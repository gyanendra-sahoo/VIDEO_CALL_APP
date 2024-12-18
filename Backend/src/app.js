import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import mongoose from 'mongoose';

import {connectToSocket} from './controllers/socketManager.js';

import cors from 'cors';
import userRoutes from './routes/user.route.js';


const app = express();
const server = createServer(app);
const io = connectToSocket(server);


// Set up the port
app.set("port", process.env.PORT || 8000);


// Middleware
app.use(cors());
app.use(express.json({limit: "40kb"}));
app.use(express.urlencoded({limit: "40kb", extended: true}));


app.use("/api/v1/users",userRoutes);

// Route to test MongoDB connection
app.get('/', async (req, res) => {
    try {
        return res.json({ "hello": "world" });
    } catch (error) {
        return res.status(500).json({ error: 'Database connection failed', details: error.message });
    }
});

// Start server
const start = async () => {
    try {
        const connectionDb = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`Mongoose connected at Host: ${connectionDb.connection.host}`);

        server.listen(app.get("port"), () => {
            console.log(`Server running on port ${app.get("port")}`);
        });
    } catch (error) {
        console.error(`Database connection failed: ${error.message}`);
        process.exit(1);
    }
};


start();
