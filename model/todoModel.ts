import { Document, Schema, model } from "mongoose";

interface iTodo {
	task: string;
	achieved: string | null;
	deadLine: string;
	done: string;
}
