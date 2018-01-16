const express = require('express');
const http = require('http');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname + 'dist')));
const port = process.env.PORT || '5000';
app.set('port', port);
const server = http.createServer(app);
app.get('/*', function(req, res) => {
  res.sendFile(path.join(__dirname + 'dist/index.html'));
});
server.listen(port, () => console.log('Console listening!'));

