import path from 'path';
import crypto from 'crypto';
import multer from 'multer';

const tnpFolder = path.resolve(__dirname, '..', '..', 'tmp');

export default {
  directory: tnpFolder,

  storage: multer.diskStorage({
    destination: tnpFolder,
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('HEX');
      const fileName = `${fileHash}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};
