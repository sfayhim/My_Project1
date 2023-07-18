const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Hello, world!');
});
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
const indexRouter = require('./ROUTES/index.js');
app.use('/', indexRouter);
const path = require('path'); 
//app.set('view engine', 'ejs');
//app.set('Views', path.join(__dirname, 'Views'));
app.set('Views', path.join(__dirname, 'Views'));
app.set('View engine', 'html');
//app.engine('html', require('ejs').renderFile);


