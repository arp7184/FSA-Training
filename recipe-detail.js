import { initHeaderNavigation } from './nav.js';

function setRecipeTitleFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const title = params.get('title');
  const titleEl = document.getElementById('recipeTitle');

  if (titleEl) {
    titleEl.textContent = title || 'Recipe Title Placeholder';
  }
}

window.addEventListener('DOMContentLoaded', () => {
  initHeaderNavigation();
  setRecipeTitleFromUrl();
});

