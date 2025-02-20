function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  const sliderimages = document.querySelectorAll('.slide-in');
  function checkSlide(){
    sliderimages.forEach(sliderimage=>{
        const slideInAt = (window.scrollY + window.innerHeight)-
            sliderimage.height/2;
        const imagebottom = sliderimage.offsetTop + 
        sliderimage.height;
        const isImageHalfShown = slideInAt> sliderimage.offsetTop;
        const isNotscrolledPast = imagebottom > slideInAt;
           
        if(isImageHalfShown && isNotscrolledPast){
            sliderimage.classList.add('active');
        }
        else{
            sliderimage.classList.remove('active');
        }
    });
  }
  window.addEventListener('scroll',debounce(checkSlide));