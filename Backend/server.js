import express from 'express';
const app = express();

import multer from 'multer';

const upload = multer({dest: './uploads'});

app.post('/upload', upload.single('image'), (req, res) => {
  res.send('File uploaded');
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})