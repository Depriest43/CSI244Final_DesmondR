const fetch = require('node-fetch');

const BASE_URL = 'http://localhost:5001/';

const registerUser = async (username, email, password) => {
  const response = await fetch(`${BASE_URL}users/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, email, password }),
  });
  const data = await response.json();
  console.log('Register User:', data);
  return data;
};

const loginUser = async (username, password) => {
  const response = await fetch(`${BASE_URL}/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });
  const data = await response.json();
  console.log('Login User:', data);
  return data;
};

const getAllRecipes = async () => {
  const response = await fetch(`${BASE_URL}/recipes`, {
    method: 'GET',
    headers: {
      
    },
  });
  const data = await response.json();
  console.log('All Recipes:', data);
  return data;
};

const createRecipe = async (name, ingredients, instructions) => {
  const response = await fetch(`${BASE_URL}/recipes/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      
    },
    body: JSON.stringify({ name, ingredients, instructions }),
  });
  const data = await response.json();
  console.log('Create Recipe:', data);
  return data;
};

const updateRecipe = async (id, name, ingredients, instructions) => {
  const response = await fetch(`${BASE_URL}/recipes/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      
    },
    body: JSON.stringify({ name, ingredients, instructions }),
  });
  const data = await response.json();
  console.log('Update Recipe:', data);
  return data;
};

const main = async () => {
  // Register a new user
    await registerUser('testuser','email@1234.com', 'password123');

  // Login the user
//   const loginData = await loginUser('testuser', 'password123');
//   const token = `Bearer ${loginData.token}`;

  // Create a new recipe
//   await createRecipe('Simple Nachos Plate', ['nacho chips', 'taco mix', 'hamburger meat', 'cheez whiz'], 'Layer ingredients and bake.');

  // Get all recipes
//   await getAllRecipes();

  // Update the recipe
//   await updateRecipe(1, 'Deluxe Nachos Plate', ['nacho chips', 'taco mix', 'hamburger meat', 'cheez whiz', 'jalapenos'], 'Layer ingredients, add jalapenos, and bake.');
};

main();
