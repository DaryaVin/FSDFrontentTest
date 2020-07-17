$('.imgSlider').each(function() {
  var imgSlider = $(this),
    prevButton = imgSlider.find('.imgSlider__prev'),
    nextButton = imgSlider.find('.imgSlider__next'),
    imgList = imgSlider.find('.imgSlider__imgList'),
    dotList = imgSlider.find('.imgSlider__dotList'),
    dotElement = imgSlider.find('.imgSlider__dotElement'),
    imgElement = imgSlider.find('.imgSlider__imgElement');
  var slideIndex = 0;
  function img(i) {
    return imgList.find(imgElement[i]);
  }
  function dot(i) {
    return dotList.find(dotElement[i]);
  }
  /* Основная функция слайдера */
  function showSlides(n) {
    if (n > imgElement.length-1) {
      slideIndex = 0;
    } else if (n < 0) {
        slideIndex = imgElement.length-1;
    } else {
      slideIndex = n;
    }
    for (var i = 0; i < imgElement.length; i++) {
      img(i).css( "display", "none");
    }
    for (var i = 0; i < dotElement.length; i++) {
      var d = dot(i);
      if (d.hasClass('active')) {
        d.removeClass('active');
      }
    }
    img(slideIndex).css("display","block");
    dot(slideIndex).addClass(" active");
  };

  /* Отображение при загрузки первой картинки*/
  showSlides(slideIndex);
  /* Функция увеличивает индекс на 1, показывает следующй слайд*/
  prevButton.click(function() {
    showSlides(slideIndex -=1);
  });
  /* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
  nextButton.click(function() {
    showSlides(slideIndex +=1);
  });
  /* Устанавливает слайд, выбранный с помощью точечной навигации */
  for (let i = 0; i < dotElement.length; i++) {
    var d = dot(i);
    d.click(function(){
      showSlides(slideIndex = i);
    });
  }
});
