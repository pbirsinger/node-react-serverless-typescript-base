import serverless from "serverless-http";
import express from "express";
import * as path from "path";

import renderer from "./middleware/renderer";

const app = express();

app.use("^/$", renderer);
app.use(express.static(path.join(__dirname, "client", "./build")));

export const handler = serverless(app);
