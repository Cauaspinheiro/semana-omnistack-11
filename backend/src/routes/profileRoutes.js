import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ProfileController from '../controllers/ProfileController';

const routes = Router();

routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({ id: Joi.string().required() }).unknown(),
}),
ProfileController.index);

export default routes;
