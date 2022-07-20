import 'dotenv/config';
import express from 'express';
import { resolve } from 'path';
import cors from 'cors';
import routes from './routes';

import './database';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/file', express.static(resolve(__dirname, '..', 'tmp', 'shirts')));
app.use(routes);

app.listen(3333, () => console.log('listening'));
