const images = [
  'assets/images/slide1.jpeg',
  'assets/images/slide2.jpeg',
  'assets/images/slide3.jpeg',
  'assets/images/slide4.jpeg',
  'assets/images/slide5.jpeg'
];

const slideshow = document.getElementById('bg-slideshow');
let currentIndex = 0;

function changeBackground() {
  slideshow.style.opacity = 0;

  setTimeout(() => {
    slideshow.style.backgroundImage = `url(${images[currentIndex]})`;
    slideshow.style.opacity = 1;

    currentIndex = (currentIndex + 1) % images.length;
  }, 1500);
}

slideshow.style.backgroundImage = `url(${images[0]})`;

setInterval(changeBackground, 5000);
