import { Router } from 'express';

import shirtsRouter from './shirts';

import usersRouter from './users';

const appRouter = Router();

appRouter.use('/shirts', shirtsRouter);
appRouter.use('/users', usersRouter)

export default appRouter;
