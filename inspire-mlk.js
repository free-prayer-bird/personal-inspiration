var cards = document.querySelectorAll('.card');
console.log(cards);
cards.forEach(function(card) {
    card.addEventListener('click', function() {
        card.classList.toggle('is-flipped');
    });
});