<script>
  let slideIndex = 0; // Start at 0 for array indexing
  
  // Function to show a specific slide (n is the index)
  function showSlides(n) {
    let slides = document.querySelectorAll(".carousel-slide");
    
    // Handle wrap-around
    if (n >= slides.length) {slideIndex = 0} 
    if (n < 0) {slideIndex = slides.length - 1}
    
    // Hide all slides and remove the active class
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
      slides[i].style.display = "none";
    }
    
    // Show the current slide and add the active class
    slides[slideIndex].classList.add("active");
    slides[slideIndex].style.display = "block";
  }

  // Function to move to the next or previous slide
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  // Initial function call to show the first slide and set up listeners
  document.addEventListener('DOMContentLoaded', () => {
    // Check if the elements exist before adding listeners
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    
    if (prevButton && nextButton) {
        showSlides(slideIndex); // Show the first slide (index 0)

        // Attach event listeners to the navigation buttons
        prevButton.addEventListener('click', () => {
          plusSlides(-1);
        });
        nextButton.addEventListener('click', () => {
          plusSlides(1);
        });
    }
  });
</script>