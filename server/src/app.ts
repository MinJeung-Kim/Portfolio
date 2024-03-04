import express, { Response } from "express";
import cors from "cors";
import moran from "morgan";
import helmet from "helmet";
import authRouter from "./router/auth.js";
import { config } from "./config.js";

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

app.listen(config.host.port, () => {
  console.log("Started!");
});
