import serverless from "serverless-http";
import express from "express";

const app = express();

app.get("/", function(req, res) {
  res.send("Hello World!");
});

export const handler = serverless(app);
