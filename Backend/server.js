import express from 'express';
import bodyParser from 'body-parser'; // Import body-parser
const app = express(); // Create an Express app
app.use(bodyParser.json()); // Use body-parser middleware
import multer from 'multer';
import {uploads} from './upload.js';
import connectDB from './db.js';
import { getVideo } from './Getvido.js';

const storage = multer.memoryStorage()
const upload = multer({ storage: storage });

app.post('/upload', upload.single('fileName'), uploads);

app.post('/geturl', getVideo);

app.listen(3000,()=>{
    connectDB();
    console.log('Server is running on port 3000');
})