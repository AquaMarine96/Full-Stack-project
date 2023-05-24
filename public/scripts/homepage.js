document.addEventListener('DOMContentLoaded', function () {
    var slides = document.querySelectorAll('.slideshow-container img');
    var prev = document.querySelector('.prev');
    var next = document.querySelector('.next');
    var dotsContainer = document.querySelector('.dots');
    var eventTitle = document.querySelector('.event-title');

    var slideIndex = 0;

    // Initialize the slideshow
    showSlide(slideIndex);

    // Event listeners for navigation arrows
    prev.addEventListener('click', function () {
        showSlide(slideIndex -= 1);
    });

    next.addEventListener('click', function () {
        showSlide(slideIndex += 1);
    });

    // Function to show the current slide
    function showSlide(index) {
        if (index < 0) {
            slideIndex = slides.length - 1;
        } else if (index >= slides.length) {
            slideIndex = 0;
        }

        // Hide all slides and dots
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
            dotsContainer.children[i].classList.remove('active');
        }

        // Show current slide and set corresponding dot as active
        slides[slideIndex].style.display = 'block';
        dotsContainer.children[slideIndex].classList.add('active');

        // Update event title
        eventTitle.textContent = slides[slideIndex].alt;

        // Fade in event title with a delay
        setTimeout(function () {
            eventTitle.classList.add('active');
        }, 300);
    }

    // Create dots for each slide
    for (var i = 0; i < slides.length; i++) {
        var dot = document.createElement('span');
        dot.classList.add('dot');

        // Click event listener for dots
        dot.addEventListener('click', function () {
            var dotIndex = Array.from(dotsContainer.children).indexOf(this);
            showSlide(slideIndex = dotIndex);
        });

        dotsContainer.appendChild(dot);
    }
});
