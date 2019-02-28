const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.use(cors());

const quotesApi = require('./quotes/');
quotesApi.register(app);

app.listen(process.env.PORT || 3412, () => {
    console.log('Cors-Enabled App listening on port 3412!');
});