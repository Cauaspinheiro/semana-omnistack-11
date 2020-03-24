import { Router } from 'express';

import ongsRoutes from './ongsRoutes';
import incidentsRoutes from './incidentsRoutes';

const routes = Router();

routes.get('/', (req, res) => res.json('Running Be The Hero API'));

routes.use(ongsRoutes);
routes.use(incidentsRoutes);

export default routes;
