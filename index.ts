console.clear()
import express, { Application } from "express";
import cors from "cors";

const app: Application = express();
const Port: number = 7500;

app.use(cors());
app.use(express.json());


const server = app.listen(Port, () => {
    console.log(Port)
});

process.on("uncaughtException", (err: Error) => {
  console.log("uncaughtException: ", err);

  process.exit(1);
});

process.on("unhandledRejection", (reason: any) => {
  console.log("unhandledRejection: ", reason);

  server.close(() => {
    process.exit(1);
  });
});
