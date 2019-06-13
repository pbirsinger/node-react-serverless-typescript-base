import * as express from 'express';
import * as path from 'path';
import serverless from 'serverless-http';

const app = express();
app.set('port', 5000);
app.use(express.static('build'));

app.get('/*', (req, res) => {
  const indexPath = path.resolve('build', 'index.html');
  res.sendFile(indexPath);
});

export const handler = serverless(app, { binary: ['image/*'] });
