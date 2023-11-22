import { Document, Schema, model } from "mongoose";
import { iTodo } from "../utis/interface";

export interface iTodoMain extends iTodo, Document {}

const todoModel = new Schema<iTodoMain>(
	{
		task: {
			type: String,
		},
		achieved: {
			type: String || null,
			default: null,
		},
		deadLine: {
			type: String,
		},
		done: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);

export default model<iTodoMain>("todo", todoModel);
