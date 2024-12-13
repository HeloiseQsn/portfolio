const multer = require('multer'); // pour le téléchargement des fichiers
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png',
};

const storage = multer.memoryStorage(); // Utilisation de la mémoire pour le stockage initial

const upload = multer({ storage: storage }).fields([
  { name: 'imageCarousel', maxCount: 1 },
  { name: 'imagesDiap', maxCount: 10 },
]);

module.exports = (req, res, next) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }

    if (!req.files || (!req.files.imageCarousel && !req.files.imagesDiap)) {
      return next();
    }

    try {
      // Traitement de l'image principale (imageCarousel)
      if (req.files.imageCarousel) {
        const carouselImage = req.files.imageCarousel[0];
        const carouselName = carouselImage.originalname.split(' ').join('_');
        const carouselExtension = MIME_TYPES[carouselImage.mimetype];
        const carouselFilename = `${carouselName}${Date.now()}.${carouselExtension}`;

        const carouselOutputPath = path.join(__dirname, '..', 'images', carouselFilename);

        await sharp(carouselImage.buffer)
          .resize(800, null) // Redimensionne l'image à 800 en largeur
          .toFile(carouselOutputPath);

        req.body.imageCarousel = carouselFilename;
      }

      // Traitement des images secondaires (imagesDiap)
      if (req.files.imagesDiap) {
        const diapImages = req.files.imagesDiap;
        const diapFilenames = [];

        for (let image of diapImages) {
          const diapName = image.originalname.split(' ').join('_');
          const diapExtension = MIME_TYPES[image.mimetype];
          const diapFilename = `${diapName}${Date.now()}.${diapExtension}`;

          const diapOutputPath = path.join(__dirname, '..', 'images', diapFilename);

          await sharp(image.buffer)
            .resize(800, null) // Redimensionne l'image à 800 en largeur
            .toFile(diapOutputPath);

          diapFilenames.push(diapFilename);
        }

        req.body.imagesDiap = diapFilenames;
      }

      next();
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
};
