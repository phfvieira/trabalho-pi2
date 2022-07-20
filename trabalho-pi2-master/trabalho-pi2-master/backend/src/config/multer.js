import multer, { diskStorage } from 'multer';
import { v4 as uuid } from 'uuid';
import { resolve } from 'path';

const storage = diskStorage({
  destination: (_, __, cb) => {
    cb(null, resolve(__dirname, '..', '..', 'tmp', 'shirts'));
  },
  filename: (req, file, cb) => {
    const { originalname } = file;
    cb(null, `${uuid()}-${originalname}`);
  },
});

const upload = multer({ storage });

export default upload;
