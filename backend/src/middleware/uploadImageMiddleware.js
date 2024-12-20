const multer = require('multer');
const path = require('path');
const fs = require('fs');
const util = require('util');

// Memastikan direktori 'uploads' ada atau membuatnya
const ensureUploadDirectoryExists = async () => {
  const uploadDir = path.join(__dirname, '../../uploads');

  try {
    await fs.promises.mkdir(uploadDir, { recursive: true }); // Membuat direktori jika tidak ada
  } catch (error) {
    console.error('Error creating upload directory:', error);
    throw new Error('Unable to create upload directory');
  }
};

// Konfigurasi penyimpanan file
const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    try {
      await ensureUploadDirectoryExists(); // Memastikan direktori tersedia
      cb(null, path.join(__dirname, '../../uploads/')); // Tentukan direktori penyimpanan
    } catch (error) {
      cb(error);
    }
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Nama file dengan timestamp
  },
});

// Validasi tipe file
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];

  if (!allowedTypes.includes(file.mimetype)) {
    return cb(new Error('Only JPEG, PNG, and JPG images are allowed'), false);
  }
  cb(null, true);
};

// Maksimal ukuran file 5MB
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: fileFilter,
});

// Menangani error upload dengan middleware khusus
const handleMulterError = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    // Menangani error yang terkait dengan multer (misalnya file size limit)
    return res.status(400).json({ error: `File upload error: ${err.message}` });
  }
  if (err) {
    // Menangani error lain, seperti validasi file yang salah
    return res.status(400).json({ error: err.message });
  }
  next();
};

module.exports = { upload, handleMulterError };
