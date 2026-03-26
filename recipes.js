import { initHeaderNavigation } from './nav.js';

function wireRecipeCards() {
  const cards = document.querySelectorAll('.recipe-card');
  cards.forEach((card) => {
    card.addEventListener('click', function () {
      const title = card.dataset.title || '';
      const description = card.dataset.description || '';
      const ingredients = card.dataset.ingredients || '';
      const instructions = card.dataset.instructions || '';
      const image = card.dataset.image || '';

      const params = new URLSearchParams({
        title,
        description,
        ingredients,
        instructions,
        image,
      });

      window.location.href = `recipe-detail.html?${params.toString()}`;
    });
  });
}

window.addEventListener('DOMContentLoaded', () => {
  initHeaderNavigation();
  wireRecipeCards();
});

