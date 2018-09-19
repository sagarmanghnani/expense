import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';

// and create our instances
const app = express();
const router = express.Router();



const API_PORT = process.env.API_PORT || 3000;
// now we should configure the API to use bodyParser and look for JSON data in the request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

router.get('/', (req, res) => {
    res.json({ message: 'Hello, World!' });
  });

  
  test.get('/', (req,res) => {
      res.json({message: "test"});
  })

  app.use('/api/maxim', router);

  app.listen(API_PORT, () => {console.log(`listening on port ${API_PORT}`)});