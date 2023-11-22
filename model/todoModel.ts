import { Document, Schema, model } from "mongoose";
import { iTodo } from "../utis/interface";

export interface iTodoMain extends iTodo, Document {}

const todoModel = new Schema<iTodoMain>({
	task: {
		type: String,
	},
});
