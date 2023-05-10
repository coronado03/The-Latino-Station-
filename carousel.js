

window.onload = function() {
  //Carousel code
  const carouselContainer = document.querySelector('.carousel-container');
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');

  let currentIndex = 0;
  const slideWidth = carouselContainer.clientWidth / 3;

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      carouselContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentIndex < 2) {
      currentIndex++;
      carouselContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
  })


//Navbar Code

  const links = document.querySelectorAll('nav a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      links.forEach(link => link.classList.remove('active'));
      link.classList.add('active');
    });
  });
};