const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipe_controller');
// const authMiddleware = require('../middleware/auth');

// Get all recipes
router.get('/', recipeController.getAllRecipes);

// Create a new recipe
router.post('/', recipeController.postCreateRecipe);

// Update an existing recipe
router.put('/:id', recipeController.putUpdateRecipe);

module.exports = router;
