import express from "express";
import dotenv from "dotenv"
import {router} from "./routes.js"
dotenv.config()
const app = express();
app.use(express.json());
app.use(router)
const PORT = Number(process.env.PORT);

app.listen(PORT, () => {
    console.log(`Server Listening on http://localhost:${PORT}`);
  });