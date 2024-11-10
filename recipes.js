document.addEventListener('DOMContentLoaded', function() {
    // Add recipe button handling
    const addRecipeButton = document.querySelector('.header-button');
    addRecipeButton?.addEventListener('click', () => {
        console.log('Add recipe clicked');
        // Implement recipe addition logic
    });

    // Recipe card navigation
    const recipeCards = document.querySelectorAll('.recipe-card');
    recipeCards.forEach(card => {
        card.addEventListener('click', () => {
            const recipeName = card.querySelector('h3').textContent;
            if (recipeName === 'Morning Pour Over') {
                window.location.href = 'recipe.html';
            }
        });
    });
}); 