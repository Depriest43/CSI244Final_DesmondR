const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  ingredients: {
    type: [String],
    required: true
  },
  
  instructions: {
    type: String,
    required: true
  },
  typeOfRecipe: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Type",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Recipe', recipeSchema);
