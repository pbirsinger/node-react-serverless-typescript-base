import * as express from 'express';
import * as path from 'path';
import serverless from 'serverless-http';

const app = express();

app.use(express.static('client/build'));
app.use(express.static('build'));

app.get('/', (req, res) => {
  const indexPath = path.resolve('client', './build', 'index.html');
  res.sendFile(indexPath);
});

export const handler = serverless(app);
