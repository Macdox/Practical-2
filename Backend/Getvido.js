import AWS from 'aws-sdk';
import dotenv from 'dotenv';
import { subject } from './Model.js';

dotenv.config();



const s3 = new AWS.S3({
    endpoint: process.env.R2_URI,
    accessKeyId: process.env.R2_ACCESS_KEY,
    secretAccessKey: process.env.R2_SECRET_KEY,
    region: "auto",
    signatureVersion: 'v4'
});

export const getVideo = async (req, res) => {
    const { name } = req.body; // Destructure name from req.body
    //console.log(name);
    const filename = await subject.findOne({ name });
    //
    // res.send(filename.file);
    const params = {
        Bucket: process.env.R2_BUCKET_NAME,
        Key: filename.file,
        Expires: 3600, // Set expires here
        ResponseContentDisposition: 'inline', // Ensure the video is displayed inline
        ResponseContentType: 'video/mp4' // Set the appropriate MIME type for video
    };
    const url = s3.getSignedUrl('getObject', params);
    res.status(200).send(url);
    filename.url = url; // Update the found document
    await filename.save(); // Save the updated document
};
