const fetchedProducts = require('../products.js');

// new changes

module.exports = app => {
  app.get('https://auto-shop-server-xi.vercel.app/api/products/:category',(req, res) => {
    res.send(
      fetchedProducts.filter((product)=>product.category == (req.url.split(':')[1]))
    );
  });

  app.get('https://auto-shop-server-xi.vercel.app/api/product/:id',(req, res) => {    
    res.send(
      fetchedProducts.filter((product)=>product._id==req.url.split(':')[1])[0]
    );
  });
};
