import AWS from "aws-sdk";
import dotenv from 'dotenv';
import crypto from 'crypto';
import { subject } from "./Model.js";
dotenv.config();


const s3 = new AWS.S3({
    endpoint: process.env.R2_URI,
    accessKeyId: process.env.R2_ACCESS_KEY,
    secretAccessKey: process.env.R2_SECRET_KEY,
    region: "auto",
    signatureVersion: 'v4'
})


const ImgName = (bytes = 32) => crypto.randomBytes(bytes).toString("hex")+ ".mp4";

export const uploads = async (req, res) => {
    const file = req.file;
    const name = req.body.name;
    const discription = req.body.discription;
    if(!file){
        return res.status(400).send('Please upload a file');
    }
    try {
        if(!name || !discription){
            return res.status(400).json({ message: "Please fill in all fields" });
        }
        const fileBuffer = file.buffer;
        const fileName = ImgName();
        const params = {
            Bucket: process.env.R2_BUCKET_NAME,
            Key: fileName,
            Body: fileBuffer,
        };
        s3.putObject(params, async (err, data) => {
            if (err) {
                res.status(500).send(err);
            } else {
                const newVideo = new subject({ name,discription, file: fileName, });
                await newVideo.save();
                res.status(200).send("File uploaded successfully");
            }
        });
    } catch (error) {
        res.status(500).json({ message: "Failed to upload file", error: error.message });
    }
}

/*
const s3 = new AWS.S3(
    {
        region: "auto",
        endpooint:process.env.R2_URI,
        credentials: {
            accessKeyId: process.env.R2_ACCESS_KEY,
            secretAccessKey: process.env.R2_SECRET_KEY

    }
}
);*/