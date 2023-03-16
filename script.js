const gallery = document.querySelector('.gallery');
const images = gallery.querySelectorAll('img');

let currentImageIndex = 0;

function showImage(index) {
  images.forEach(image => {
    image.style.display = 'none';
  });
  
  images[index].style.display = 'block';
  currentImageIndex = index;
}

showImage(currentImageIndex);

setInterval(() => {
  currentImageIndex++;
  
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  
  showImage(currentImageIndex);
}, 5000);
