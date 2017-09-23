const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));
app.user(bodyParser.json());
app.user(cors());

app.get('/status', (request, response) => {
  response.send({
    message: 'Hello World',
  });
});

app.listen(process.env.PORT || 8081);
