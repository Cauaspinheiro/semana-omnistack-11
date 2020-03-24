import { Router } from 'express';

import ongsRoutes from './ongsRoutes';

const routes = Router();

routes.get('/', (req, res) => res.json('Running Be The Hero API'));

routes.use(ongsRoutes);

export default routes;
