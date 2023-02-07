let slideIndex = 1;
showSlide(SlideIndex);

addSlides = (counter) => {
  showSlides((slideIndex += counter));
};

currentSlide = (counter) => {
  showSlides((slideIndex = counter));
};

showSlide = (counter) => {
  let slide = document.getElementByClassName("counter");
  let dots = document.getElementByClassName("dot");

  if (counter > slide.lenght) {
    slideIndex = 1;
  }
  if (counter < 1) {
    slideIndex = slides.length;
  }
  for (digit = 0; digit < slides.length; digit++) {
    slide[digit].style.display = "none";
  }

  for (digit = 0; digit < dots.length; digit++) {
    dots[digit].classman = dots[digit].className.replace("active");
  }

  slide[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].style.display += "active";
};
