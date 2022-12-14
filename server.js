const mongoose = require('mongoose');
const dotenv = require('dotenv');

process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT REJECTION! 💥 shutting down...');
  console.log('ICI', err.name, err.message);

  process.exit(1);
});

dotenv.config();

const app = require('./app');

const MONGODB_URI = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB connection successfull!');
  })
  .catch((err) => console.log('ici err connexion db: ', err));

const port = (process.env.NODE_ENV = 'production' ? process.env.PORT : 8000);

const server = app.listen(port, () => {
  console.log(`app running on port ${port}...`);
});

process.on('unhandledRejection', (err) => {
  console.log('UNHANDLE REJECTION! 💥 shutting down...');
  console.log('ICI 👉:', err);
  server.close(() => {
    process.exit(1);
  });
});
