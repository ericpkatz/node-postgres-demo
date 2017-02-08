const express = require('express');

const db = require('./db');
db.connect();

const app = express();

app.get('/', (req, res, next) => {
  db.getProducts((err, products)=> {
    if(err){
      return next(err);
    }
    res.send(products);
  });
});

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening on port ${port}`));







