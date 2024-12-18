const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const cors = require('cors')


app.use(bodyParser.json());

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));




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
