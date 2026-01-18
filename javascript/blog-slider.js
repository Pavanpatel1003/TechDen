// Blog Slider JavaScript - Custom Navigation
$(document).ready(function () {
  console.log('Initializing blog slider...');
  console.log('Found slider elements:', $('.more-blogs-slick-slider').length);
  console.log('Found blog cards:', $('.blog-card-wrapper').length);
  
  let blogSlider = $('.more-blogs-slick-slider').slick({
    dots: false, // Disable default dots
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, // Disable default arrows
    touchMove: true,
    swipe: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  
  console.log('Slick slider initialized');
  
  // Create custom dots
  const totalSlides = $('.blog-card-wrapper').length;
  const slidesToShow = 3;
  const dotsCount = Math.ceil(totalSlides / slidesToShow);
  
  let dotsHtml = '';
  for (let i = 0; i < dotsCount; i++) {
    dotsHtml += `<span class="blog-dot ${i === 0 ? 'active' : ''}" data-slide="${i}"></span>`;
  }
  $('#blogSliderDots').html(dotsHtml);
  
  // Custom Navigation Buttons
  $('#blogPrevBtn').click(function () {
    blogSlider.slick('slickPrev');
  });

  $('#blogNextBtn').click(function () {
    blogSlider.slick('slickNext');
  });

  // Custom Dot Navigation
  $(document).on('click', '.blog-dot', function () {
    const slideIndex = $(this).data('slide');
    const targetSlide = slideIndex * slidesToShow;
    blogSlider.slick('slickGoTo', targetSlide);
  });

  // Update dots on slide change
  blogSlider.on('afterChange', function (event, slick, currentSlide) {
    $('.blog-dot').removeClass('active');
    const activeDot = Math.floor(currentSlide / slidesToShow);
    $('.blog-dot[data-slide="' + activeDot + '"]').addClass('active');
  });
});