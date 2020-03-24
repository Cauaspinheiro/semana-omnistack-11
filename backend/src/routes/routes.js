import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => res.json('Running Be The Hero in port 3001'));
