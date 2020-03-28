import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import OngController from '../controllers/OngController';

const routes = Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().required().min(12).max(13),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2),
  }),
}), OngController.create);
routes.delete('/ongs', OngController.destroy);


export default routes;
