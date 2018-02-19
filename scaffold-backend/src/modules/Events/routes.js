import { Router } from 'express';

import * as EventController from './controller';


const routes = new Router();

routes.post('/events/create', EventController.createEvent);
routes.post('/events', EventController.getUserEvents);

export default routes;
