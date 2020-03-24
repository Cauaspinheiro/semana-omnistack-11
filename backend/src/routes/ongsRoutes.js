import { Router } from 'express';

import OngController from '../controllers/OngController';

const routes = Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);


export default routes;
