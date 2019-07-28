import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/messages', (req, res) => {
  const helloWorld = [
    {id: 1, message: 'Hello World!'},
    {id: 2, message: 'This is pretty cool.'},
    {id: 3, message: 'You got this working!'},
    {id: 4, message: 'Amazing job!'}
  ]
  res.json(helloWorld)
});

app.get('/api', (req, res) => {
  const message = 'This is the root API route!';
  res.json(message)
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(port);
console.log(`Server listening on ${port}`);

module.exports = app;
