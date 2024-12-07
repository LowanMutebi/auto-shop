const fetchedProducts = require('../products.js');

var cors = require('cors')

var corsOptions = {
  origin: 'https://auto-shop-frontend.vercel.app/',
  optionsSuccessStatus: 200
}

module.exports = app => {
  app.get('https://auto-shop-server-dfii7aeaw-lowanmutebis-projects.vercel.app/api/products/:category', cors(corsOptions), (req, res) => {
    res.send(
      fetchedProducts.filter((product)=>product.category == (req.url.split(':')[1]))
    );
  });

  app.get('https://auto-shop-server-dfii7aeaw-lowanmutebis-projects.vercel.app/api/product/:id', cors(corsOptions), (req, res) => {    
    res.send(
      fetchedProducts.filter((product)=>product._id==req.url.split(':')[1])[0]
    );
  });
};
