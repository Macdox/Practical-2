import s3Client from '@aws-sdk/client-s3';
import dotenv from 'dotenv';

dotenv.config();

console.log(process.env.R2_URI);
const s3Client = new s3Client(
    {
        region: "auto",
        endpooint:process.env.R2_URI,
        credentials: {
            accessKeyId: process.env.R2_ACCESS_KEY,
            secretAccessKey: process.env.R2_SECRET_KEY

    }
}
);