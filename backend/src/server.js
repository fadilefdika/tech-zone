const app = require('./app');
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Hello, this is the root route!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
