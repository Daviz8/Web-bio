 
const  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
       console.log(entry);
       if(entry.isIntersecting) {
        entry.target.classList.add('show');
       }
       else{
        entry.target.classList.remove('show');
       }
       
    });
} );

 const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((element) => observer.observe(element));


document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.container > section');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 300);
    });
});



// JQUERY CAROUSEL


$(document).ready(function(){
    let currentIndex = 0;
    const totalSlides = $('.carousel-item').length;
    const slideWidth = 300; // Width of each slide
    let autoSlide;

    function showSlide(index) {
        const offset = -index * slideWidth;
        $('.carousel-inner').css('transform', `translateX(${offset}px)`);
    }

    function startAutoSlide() {
        autoSlide = setInterval(function(){
            currentIndex = (currentIndex + 1) % totalSlides;
            showSlide(currentIndex);
        }, 3000); // Change slide every 3 seconds
    }

    function stopAutoSlide() {
        clearInterval(autoSlide);
    }

    $('#next').click(function(){
        stopAutoSlide();
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
        startAutoSlide();
    });

    $('#prev').click(function(){
        stopAutoSlide();
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
        startAutoSlide();
    });

    // Start the automatic slide when the page loads
    showSlide(currentIndex);
    startAutoSlide();

    // Stop the auto-slide when the user hovers over the carousel
    $('#carousel').hover(stopAutoSlide, startAutoSlide);
});