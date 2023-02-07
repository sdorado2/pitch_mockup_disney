let slideIndex = 1;

const addSlides = (counter) => {
  showSlides((slideIndex += counter));
};

const currentSlide = (counter) => {
  showSlides((slideIndex = counter));
};

const showSlides = (counter) => {
  let slide = document.getElementByClassName("counter");
  let dots = document.getElementByClassName("dot");

  if (counter > slide.lenght) {
    slideIndex = 1;
  } 
  if (counter < 1) {
    slideIndex = slide.length;
  }
  for (digit = 0; digit < slide.length; digit++) {
    slide[digit].style.display = "none";
  }

  for (digit = 0; digit < dots.length; digit++) {
    dots[digit].classman = dots[digit].className.replace("active");
  }

  slide[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].style.display += "active";
};

showSlides(slideIndex);
