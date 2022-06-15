const multer = require("multer");

const museestorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const museeFilter = (req, file, cb) => {
  if (
   
    file.mimetype == "image/png" ||
    file.mimetype == "image/jpeg" ||
    file.mimetype == "image/jpg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

exports.upload = multer({
  storage: museestorage,
  fileFilter: museeFilter,
});


