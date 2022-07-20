import { Router } from 'express';
import UserController from '../controllers/UserController';
const usersRouter = Router();


usersRouter.post('/', async(req, res) =>{
  
  const user = await UserController.create(
    req.body
  );
  return res.status(201).json(user);
});

export default  usersRouter;