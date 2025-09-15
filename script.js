const images = [
  'assets/images/slide1.jpeg',
  'assets/images/slide2.jpeg',
  'assets/images/slide4.jpeg'
];

let currentIndex = 0;
let showingFirst = true;

const bg1 = document.getElementById('bg1');
const bg2 = document.getElementById('bg2');

// Set initial image
bg1.style.backgroundImage = `url('${images[0]}')`;
bg1.style.opacity = 1;

function crossfade() {
  currentIndex = (currentIndex + 1) % images.length;
  const nextImage = images[currentIndex];

  if (showingFirst) {
    bg2.style.backgroundImage = `url('${nextImage}')`;
    bg2.style.opacity = 1;
    bg1.style.opacity = 0;
  } else {
    bg1.style.backgroundImage = `url('${nextImage}')`;
    bg1.style.opacity = 1;
    bg2.style.opacity = 0;
  }

  showingFirst = !showingFirst;
}

setInterval(crossfade, 4000); // Change image every 4 seconds
