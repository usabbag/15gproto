document.addEventListener('DOMContentLoaded', function() {
    // Back button handling
    const backButton = document.querySelector('.back-button');
    backButton?.addEventListener('click', () => {
        window.location.href = 'my-recipes.html';
    });

    // Share button handling
    const shareButton = document.querySelector('.share-button');
    shareButton?.addEventListener('click', () => {
        console.log('Share recipe clicked');
        // Implement share functionality
    });
}); 