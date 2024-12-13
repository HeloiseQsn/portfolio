const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    title:{type : String, required: true},
    context:{type : String, required: true},
    skills: {type : String, required: true},
    challenges: {type : String, required: true},
    tools: [{type : String, required: true}], //Tableau d'URLs ou chemins d'accès, à définir
    imageCarousel : {String, required: true}, //image pour carousel des projets
    imagesDiap: [{type : String, required: true}] // images du diapo dans modale projets
}) ;

module.exports = mongoose.model('Project', projectSchema)