import { initHeaderNavigation } from './nav.js';

function setRecipeDetailsFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const title = params.get('title');
  const description = params.get('description');
  const ingredients = params.get('ingredients');
  const instructions = params.get('instructions');
  const image = params.get('image');
  const titleEl = document.getElementById('recipeTitle');
  const descriptionEl = document.getElementById('recipeDescription');
  const ingredientsEl = document.getElementById('recipeIngredients');
  const instructionsEl = document.getElementById('recipeInstructions');
  const imageEl = document.getElementById('recipeImage');


  if (titleEl) {
    titleEl.textContent = title || 'Recipe Title Placeholder';
  }
  if (descriptionEl) {
    descriptionEl.textContent = description || 'Recipe Description Placeholder';
  }
  if (ingredientsEl) {
    ingredientsEl.textContent = ingredients || 'Recipe Ingredients Placeholder';
  }
  if (instructionsEl) {
    instructionsEl.textContent = instructions || 'Recipe Instructions Placeholder';
  }
  if (imageEl) {
    imageEl.src = image || 'images/ricecake.webp';
  }
}

window.addEventListener('DOMContentLoaded', () => {
  initHeaderNavigation();
  setRecipeDetailsFromUrl();
});

