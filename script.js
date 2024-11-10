// supplies.js - Only for supplies.html
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
    
    fab?.addEventListener('click', () => {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeButton?.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    });

    modal?.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Supply type selection in modal
    const typeButtons = document.querySelectorAll('.type-button');
    const supplyForms = document.querySelectorAll('.supply-form');

    typeButtons.forEach(button => {
        button.addEventListener('click', () => {
            typeButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const formType = button.dataset.type;
            supplyForms.forEach(form => {
                form.classList.remove('active');
                if (form.id === `${formType}Form`) {
                    form.classList.add('active');
                }
            });
        });
    });
}); 