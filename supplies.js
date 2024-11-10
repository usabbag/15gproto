document.addEventListener('DOMContentLoaded', function() {
    // Category expansion
    const categoryHeaders = document.querySelectorAll('.category-header');
    categoryHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const category = header.parentElement;
            category.classList.toggle('open');
        });
    });

    // Modal handling
    const modal = document.getElementById('addSupplyModal');
    const fab = document.querySelector('.fab');
    const closeButton = document.querySelector('.close-button');
    
    // Open modal
    fab.addEventListener('click', () => {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        // Ensure bottom sheet animation works
        requestAnimationFrame(() => {
            modal.querySelector('.bottom-sheet').style.transform = 'translateY(0)';
        });
    });

    // Close modal
    closeButton.addEventListener('click', () => {
        closeModal();
    });

    // Close on overlay click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    function closeModal() {
        const bottomSheet = modal.querySelector('.bottom-sheet');
        bottomSheet.style.transform = 'translateY(100%)';
        setTimeout(() => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }, 300); // Match the transition duration from CSS
    }

    // Supply type selection in modal
    const typeButtons = document.querySelectorAll('.type-button');
    const supplyForms = document.querySelectorAll('.supply-form');

    typeButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            typeButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Show corresponding form
            const formType = button.dataset.type;
            supplyForms.forEach(form => {
                form.classList.remove('active');
                if (form.id === `${formType}Form`) {
                    form.classList.add('active');
                }
            });
        });
    });

    // AI Photo button handling
    const aiPhotoButton = document.querySelector('.ai-photo-button');
    aiPhotoButton.addEventListener('click', () => {
        // Here you would implement the camera/photo functionality
        console.log('Opening camera for AI identification...');
    });

    // Form submission
    const submitButton = document.querySelector('.submit-button');
    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        // Here you would handle the form submission
        console.log('Submitting supply form...');
        closeModal();
    });
}); 