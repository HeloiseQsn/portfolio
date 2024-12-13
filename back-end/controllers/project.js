const Project = require('../models/project');
const fs = require('fs');
const path = require('path');

exports.createProject = async (req, res, next) => {
  try {
    const projectObject = JSON.parse(req.body.project); 

    delete projectObject._id;
    delete projectObject._userId;

    if (!req.files || (!req.files.imageCarousel && !req.files.imagesDiap)) {
      return res.status(400).json({ error: 'Aucun fichier image fourni.' });
    }


    if (req.files.imageCarousel) {
      const carouselImage = req.files.imageCarousel[0];
      projectObject.imageCarousel = path.join(__dirname, '..', 'images', carouselImage.filename);
    }

    if (req.files.imagesDiap) {
      projectObject.imagesDiap = req.files.imagesDiap.map(image => path.join(__dirname, '..', 'images', image.filename));
    }

    const project = new Project({
      ...projectObject, // Copie des propriétés
      userId: req.auth.userId, // Ajoute l'ID utilisateur authentifié
    });

    await project.save();
    res.status(201).json({ message: 'Projet créé avec succès !' });
  } catch (error) {
    console.error('Erreur dans le middleware:', error);

    // Suppression des fichiers images si une erreur survient avant la sauvegarde
    if (req.files) {
      if (req.files.imageCarousel) {
        const imagePath = path.join(__dirname, '..', 'images', req.files.imageCarousel[0].filename);
        if (fs.existsSync(imagePath)) {
          fs.unlinkSync(imagePath); // Supprime le fichier
        }
      }

      if (req.files.imagesDiap) {
        req.files.imagesDiap.forEach(image => {
          const imagePath = path.join(__dirname, '..', 'images', image.filename);
          if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath); // Supprime le fichier
          }
        });
      }
    }

    res.status(400).json({ error: error.message || 'Erreur dans la requête.' });
  }
};
