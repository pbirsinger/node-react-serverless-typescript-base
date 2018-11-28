import * as express from "express";
import * as path from "path";
import serverless from "serverless-http";

import renderer from "./middleware/renderer";

const app = express();

app.use(express.static("client/build"));

app.get('/', (req,res) => {
  const indexPath = path.resolve("client", "./build", "index.html");
  res.sendFile(indexPath);
});

export const handler = serverless(app);
