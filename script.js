const images = [
  'assets/images/slide1.jpeg',
  'assets/images/slide2.jpeg',
  'assets/images/slide3.jpeg',
  'assets/images/slide4.jpeg',
  'assets/images/slide5.jpeg'
];

let currentIndex = 0;
const bgElement = document.getElementById('bg-slideshow');

function changeBackground() {
  bgElement.style.opacity = 0;

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % images.length;
    bgElement.style.backgroundImage = `url('${images[currentIndex]}')`;
    bgElement.style.opacity = 1;
  }, 500); // match with CSS transition time (0.5s fade)
}

// Initial background image
bgElement.style.backgroundImage = `url('${images[0]}')`;

// Start the slideshow
setInterval(changeBackground, 4000); // 4 seconds per image (adjust as needed)
