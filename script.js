// You can add interactive functionality here if needed
document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded successfully!');
    
    // Example: Add a click event to all content boxes
    const boxes = document.querySelectorAll('.content-box');
    boxes.forEach(box => {
        box.addEventListener('click', function() {
            console.log('Navigating to: ' + this.getAttribute('href'));
            // You could add animation or other effects here
        });
    });
    
    // You can add more interactive elements as needed
});