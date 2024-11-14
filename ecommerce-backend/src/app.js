const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const profileRoutes = require('./routes/userProfileRoutes');
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const auctionRoutes = require('./routes/auctionRoutes');
const bidRoutes = require('./routes/bidRoutes');

const app = express();

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/userProfile', profileRoutes);
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/auctions', auctionRoutes);
app.use('/api/bids', bidRoutes);

app.get('/', (req, res) => {
  res.send('Hello from Express');
});

module.exports = app;
