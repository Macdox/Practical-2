import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		file: {
            type: String,
            required: true,
        },
		name: {
			type: String,
			required: true,
		},
		discription: {
			type: String,
			required: true,
		},
		url: {
			type: String,
		},
        
	},
	{ timestamps: true }
);

export const subject = mongoose.model("Subject", userSchema);
