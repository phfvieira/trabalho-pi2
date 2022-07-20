import { Router } from 'express';

import upload from '../config/multer';

import ShirtsController from '../controllers/ShirtsController';

const shirtsRouter = Router();

shirtsRouter.get('/', async (req, res) => {
  const { search = '' } = req.query;
  const shirts = await ShirtsController.list(search);

  return res.status(200).json(shirts);
});

shirtsRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const shirt = await ShirtsController.index(id);

  if (!shirt) {
    return res.status(404).json({ error: 'Not found' });
  }

  return res.status(200).json(shirt);
});

shirtsRouter.post('/', upload.single('file'), async (req, res) => {
  const { filename } = req.file;

  console.log(req.file, req.body);

  const shirt = await ShirtsController.create({
    ...req.body,
    linkimg: filename,
  });
  return res.status(201).json(shirt);
});

export default shirtsRouter;
