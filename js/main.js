(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
     window.addEventListener('DOMContentLoaded', () => {
        const nav = document.querySelector('.navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
            
        });
    });

// Get the hamburger icon and navbar
const hamburger = document.getElementById('hamburger');
const navbar = document.querySelector('.navbar');

// Toggle the "active" class to show/hide nav links
hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
   
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });

    
})(jQuery);

 const words = ["STATUS!", "LEGACY!", "FUTURE!"];
        let index = 0;

        // Get the span element
        const wordElement = document.getElementById("dynamic-word");

        // Function to update the word
        function updateWord() {
            index = (index + 1) % words.length; // Cycle through words
            wordElement.style.opacity = 0; // Fade out
            setTimeout(() => {
                wordElement.textContent = words[index]; // Update text
                wordElement.style.opacity = 1; // Fade in
            }, 500); // Match with CSS transition duration
        }

        // Start cycling words every 2 seconds
        setInterval(updateWord, 2000);


ScrollReveal({ 
     reset: true,
     distance: '60px',
     duration: 2500,
     delay:400     
});




ScrollReveal().reveal('h1', { delay: 200, origin: 'bottom'});
ScrollReveal().reveal('h2', { delay: 200, origin: 'left'});
ScrollReveal().reveal('p', { delay: 200, origin: 'right'});
ScrollReveal().reveal('h5', { delay: 200, origin: 'left'});




