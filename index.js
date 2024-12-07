const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const cors = require('cors')


app.use(bodyParser.json());
app.use(cors())
app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "https://auto-shop-frontend.vercel.app/"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});



require('./routes/productsRoutes')(app);
require('./routes/carsRoutes')(app);

app.get('/', (req, res) => {
  res.send('Hello! Express on vercel');
});

// if (process.env.NODE_ENV === 'production') {
//   // Express will serve up production assets
//   // like our main.js file, or main.css file!
//   app.use(express.static('client/build'));

//   // Express will serve up the index.html file
//   // if it doesn't recognize the route
//   const path = require('path');
//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   });
// }

const PORT = process.env.PORT || 5000;
app.listen(PORT);
