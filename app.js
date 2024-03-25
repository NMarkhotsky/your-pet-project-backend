const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

const {
  authRouter,
  noticesRouter,
  petsRouter,
  swaggerRouter,
  usersRouter,
  friendsRouter,
  newsRouter,
} = require('./routes');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

const allowedOrigins = [
  'https://nmarkhotsky.github.io',
  'http://localhost:3000',
];

const allowedHeaders = [
  'Access-Control-Allow-Origin',
  'Access-Control-Allow-Headers',
  'X-CSRF-Token',
  'X-Requested-With',
  'Accept',
  'Accept-Version',
  'Content-Length',
  'Content-MD5',
  'Content-Type',
  'Date',
  'X-Api-Version',
  'Authorization',
];

const exposedHeaders = [
  'Access-Control-Allow-Origin',
  'Access-Control-Allow-Headers',
  'X-CSRF-Token',
  'X-Requested-With',
  'Accept',
  'Accept-Version',
  'Content-Length',
  'Content-MD5',
  'Content-Type',
  'Date',
  'X-Api-Version',
  'Authorization',
  'Content-Range',
  'X-Content-Range',
];

const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: allowedHeaders,
  exposedHeaders: exposedHeaders,
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use(logger(formatsLogger));
app.use(cors(corsOptions));
app.use(express.json());

app.use(express.static('public'));

app.use('/api/api-docs', swaggerRouter);

app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);
app.use('/api/notices', noticesRouter);
app.use('/api/friends', friendsRouter);
app.use('/api/news', newsRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message });
});

module.exports = app;
