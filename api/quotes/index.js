const data = require('./data.json');
const crud = require('./crudFunctions');

crud.loadData(data);

module.exports = {
    register: function (app) {

        app.get('/quote', (req, res) => {
            res.send(crud.getAll());
        });

        app.get('/quote/:id', (req, res) => {
            let quote = crud.getdById(req.params.id);
            if (!quote) {
                res.statusCode = 404;
                return res.send('Error 404: No quote found');
            } else {
                return res.send(quote);
            }
        });

        app.post('/quote', (req, res) => {
            // console.log(req.body);
            if (!req.body.hasOwnProperty('author') || !req.body.hasOwnProperty('text')) {
                res.statusCode = 400;
                return res.send('Error 400: Post syntax incorrect.');
            }

            let newQuote = {
                author: req.body.author,
                text: req.body.text
            };

            let data = {
                id: crud.addRow(newQuote)
            };
            res.send(data);
        });

        app.put('/quote', (req, res) => {
            if (!req.body.hasOwnProperty('author') || !req.body.hasOwnProperty('text')) {
                res.statusCode = 400;
                return res.send('Error 400: Post syntax incorrect.');
            }

            let existingQuote = {
                id: req.body.id,
                author: req.body.author,
                text: req.body.text
            };

            res.send(crud.updateRow(existingQuote));
        });

        app.delete('/quote/:id', (req, res) => {
            let found = crud.getdById(req.params.id);
            if (!found) {
                res.statusCode = 404;
                return res.send('Error 404: No quote found');
            } else {
                let data = {
                    count: crud.deleteRow(found)
                };
                res.send(data);
            }
        });
    }
}