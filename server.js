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

app.get('/:id', (req, res, next)=> {
  db.getProduct(req.params.id*1, (err, product)=> {
    if(err){
      return next(err);
    }
    res.send(product);
  });
});

app.use((error, req, res, next)=> {
  res.send(error.message);
});

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening on port ${port}`));







