// js for menu selection
function setActiveLink(event) {
    // Remove active class from all links
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('menuActive');
    });

    // Add active class to clicked link
    event.target.classList.add('menuActive');

    if (event.target.id === 'about') {
        // Scroll smoothly to the .about us section
        document.querySelector('.aboutUs').scrollIntoView({ behavior: 'smooth' });
    }
}

// Add event listeners to all nav links
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', setActiveLink);
});


// js for slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}