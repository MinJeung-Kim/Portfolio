import express, { Response } from "express";
import cors from "cors";
import moran from "morgan";
import helmet from "helmet";
import authRouter from "./router/auth";
import { config } from "./config";
import { Server } from "socket.io";

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(moran("tiny"));

app.use("/auth", authRouter);

app.use((res: Response) => {
  res.sendStatus(404);
});

app.use((error: any, res: Response) => {
  console.error(error);
  res.sendStatus(500);
});

const server = app.listen(config.host.port);
const socketIO = new Server(server, {
  cors: {
    origin: "*",
  },
});

socketIO.on("connection", (socket) => {
  console.log("Client is here!");
  socketIO.emit("Roxie", "Hello👋");
});
