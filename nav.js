export function initHeaderNavigation() {
  const homeButton = document.getElementById('homeButton');
  const recipeListLink = document.getElementById('recipeListLink');
  const suggestButton = document.getElementById('suggestButton');

  if (homeButton) {
    homeButton.addEventListener('click', function () {
      window.location.href = 'index.html';
    });
  }

  if (recipeListLink) {
    recipeListLink.addEventListener('click', function (event) {
      event.preventDefault();
      window.location.href = 'recipe-list.html';
    });
  }

  if (suggestButton) {
    suggestButton.addEventListener('click', function (event) {
      event.preventDefault();
      window.location.href = 'suggest.html';
    });
  }
}

