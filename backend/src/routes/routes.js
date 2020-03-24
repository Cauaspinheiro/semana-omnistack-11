import { Router } from 'express';

import ongsRoutes from './ongsRoutes';
import incidentsRoutes from './incidentsRoutes';
import profileRoutes from './profileRoutes';
import sessionRoutes from './sessionRoutes';

const routes = Router();

routes.get('/', (req, res) => res.json('Running Be The Hero API'));

routes.use(ongsRoutes);
routes.use(sessionRoutes);
routes.use(profileRoutes);
routes.use(incidentsRoutes);

export default routes;
