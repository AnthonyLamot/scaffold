import { Router } from 'express';

import * as UserController from './controller';

const UserRoutes = new Router();

UserRoutes.post('/users/create', UserController.createUser);
UserRoutes.get('/users', UserController.getAllUsers);
UserRoutes.post('/users/login', UserController.login);

export default UserRoutes;
