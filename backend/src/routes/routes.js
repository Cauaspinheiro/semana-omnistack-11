import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => res.json('Running Be The Hero API'));

export default routes;
