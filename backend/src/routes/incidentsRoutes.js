import { Router } from 'express';
import IncidentController from '../controllers/IncidentController';

const routes = Router();

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.destroy);

export default routes;
