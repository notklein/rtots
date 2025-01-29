let slideIndex = 0; // Start from the first slide
    showSlides();

    function showSlides() {
        const slides = document.getElementsByClassName("slides");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; // Hide all slides
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1; // Reset to the first slide
        }
        slides[slideIndex - 1].style.display = "block"; // Show the current slide
        setTimeout(showSlides, 3000); // Change slide every 3 seconds
    }

    function changeSlide(n) {
        slideIndex += n; // Change slide index
        const slides = document.getElementsByClassName("slides");
        if (slideIndex > slides.length) {
            slideIndex = 1; // Loop to first slide
        } else if (slideIndex < 1) {
            slideIndex = slides.length; // Loop to last slide
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; // Hide all slides
        }
        slides[slideIndex - 1].style.display = "block"; // Show the selected slide
    }
    

    document.getElementById('logoutButton').addEventListener('click', () => {
        const confirmLogout = confirm('Are you sure you want to logout?');
        if (confirmLogout) {
            window.location.href = 'loginpage.html';
        }
    });
