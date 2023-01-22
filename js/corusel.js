$('.corusel_sliks-container').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
  });

 
  $('.community-corusels').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: '20px',
    variableWidth: true
  });

  $('.project__corusel_toleft').slick({
    autoplay:true,
    infinite:true,
    autoplaySpeed:1,
    slidesToScroll:1,
    slidesToShow:5,
    arrows:false,
    cssEase:'linear',
    speed:1000,
    initialSlide:1,
    draggable:false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });
 