document.addEventListener("DOMContentLoaded", function () {
  const track = document.getElementById("carouselTrack");
  const slides = document.querySelectorAll(".carousel-img");
  let currentIndex = 0;
  const totalSlides = slides.length;

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    // Calculate translate percentage: e.g., -100%, -200%, -300%
    const offset = -currentIndex * 100;
    track.style.transform = `translateX(${offset}%)`;
  }

  // Automatically slide left every 3 seconds (3000ms)
  setInterval(nextSlide, 3000);
});