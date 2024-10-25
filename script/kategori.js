// Animasi Card
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {

        
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateZ(100px) scale(1.05)';
            card.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.3)';
            card.style.transition = 'transform 0.5s, box-shadow 0.5s';
        });
        
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateZ(0px) scale(1)';
            card.style.boxShadow = 'none';
            card.style.transition = 'transform 0.5s, box-shadow 0.5s';
        });
    });
});

// Pencarian 
$(document).ready(function() {
    $("#search-class").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(".card").filter(function() {
            $(this).toggle($(this).find(".card-title").text().toLowerCase().indexOf(value) > -1);
        });
    });
});