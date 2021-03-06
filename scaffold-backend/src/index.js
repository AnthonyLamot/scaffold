import express from 'express';

import dbConfig from './config/db';
import middlewareConfig from './config/middlewares';
import {
  UserRoutes,
  EventRoutes,
} from './modules';


const app = express();

dbConfig();

middlewareConfig(app);

app.use('/api', [
  UserRoutes,
  EventRoutes,
]);

const PORT = process.env.PORT || 9001;

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`App listen to port: ${PORT}`);
  }
});
