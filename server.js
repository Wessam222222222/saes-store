const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const app = express();
const port = 3000;

// Replace <password> with your MongoDB password
const uri = "mongodb+srv://wessamahmedsamirahmed:<password>@cluster0.qoyhumj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

let db;

MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database');
    db = client.db('ads-database');
  })
  .catch(error => console.error(error));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/ads', (req, res) => {
  const ad = req.body;
  db.collection('ads').insertOne(ad)
    .then(result => {
      res.status(201).send(result);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

app.get('/api/ads', (req, res) => {
  db.collection('ads').find().toArray()
    .then(results => {
      res.status(200).send(results);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
