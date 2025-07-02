import multer from "multer";
import path from 'path'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,'/temp' );
  },
  filename: function (req, file, cb) {
    const uniqurSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqurSuffix);
  },
});
const upload = multer({ storage: storage });
export default upload;
