import { initHeaderNavigation } from './nav.js';

function wireRecipeCards() {
  const cards = document.querySelectorAll('.recipe-card');
  cards.forEach((card) => {
    card.addEventListener('click', function () {
      const title = card.dataset.title || '';
      window.location.href = `recipe-detail.html?title=${encodeURIComponent(title)}`;
    });
  });
}

window.addEventListener('DOMContentLoaded', () => {
  initHeaderNavigation();
  wireRecipeCards();
});

