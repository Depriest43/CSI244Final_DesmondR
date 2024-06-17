const Recipe = require('../models/recipe');

// Get all recipes
const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Create a new recipe
const postCreateRecipe = async (req, res) => {
  const { name, ingredients, instructions } = req.body;
  if (!name || !ingredients || !instructions) {
    return res.status(400).send('Name, ingredients, and instructions are required');
  }

  try {
    const newRecipe = new Recipe({ name, ingredients, instructions });
    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Update an existing recipe
const putUpdateRecipe = async (req, res) => {
  const id = req.params.id;
  const { name, ingredients, instructions } = req.body;

  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      id,
      { name, ingredients, instructions },
      { new: true }
    );

    if (!updatedRecipe) {
      return res.status(404).send('Recipe not found');
    }

    res.json(updatedRecipe);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getAllRecipes,
  postCreateRecipe,
  putUpdateRecipe,
};
