import { Router } from 'express';
import ProfileController from '../controllers/ProfileController';

const routes = Router();

routes.get('/profile', ProfileController.index);

export default routes;
