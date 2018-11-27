import * as React from "react";
import * as ReactDOMServer from "react-dom/server";

import * as fs from "fs";
import { Request, Response } from "express";
import * as path from "path";

import App from "../../client/src/App";

export default (req: Request, res: Response) => {
  // point build index.html
  const filePath = path.resolve("client", "./public", "index.html");
// read in html file
  fs.readFile(filePath, "utf8", (err, htmlData) => {
    if (err) {
      return res.send(err).end();
    }
    // render the app as a string
    const html = ReactDOMServer.renderToString(<App />);
    // inject the rendered app into our html and send it
    return res.send(
      // replace default html with rendered html
      htmlData.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    );
  });
};