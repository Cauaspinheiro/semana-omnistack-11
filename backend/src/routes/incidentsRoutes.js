import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import IncidentController from '../controllers/IncidentController';

const routes = Router();

routes.get('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number(),
  }),
}), IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', celebrate({
  [Segments.HEADERS]: Joi.object().keys({
    id: Joi.number().required(),
  }),
}), IncidentController.destroy);

export default routes;
