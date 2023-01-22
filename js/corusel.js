// $('.our_corusel-box').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     centerPadding: '20px',
//     autoplay: true,
//     autoplaySpeed: 2000,
//     dots: true,
//   });

$('.our_corusel-box').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  // slidesToScroll: 1,
  centerMode: true,
  variableWidth: true,
  autoplay:true
});

  $('.corusel_sliks-container').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    // slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    autoplay:true
  });

  // $('.our_corusel-box').slick({
  //   dots: true,
  //   infinite: true,
  //   speed: 300,
  //   slidesToShow: 1,
  //   centerMode: true,
  //   variableWidth: true
  // });

  // $('.corusel_sliks-container').slick({
  //   dots: true,
  //   infinite: false,
  //   speed: 300,
  //   slidesToShow: 1,
  //   centerMode: true,
  //   centerPadding: '20px',
  //   variableWidth: true
  // });

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

  const elBtn =document.querySelector('.our_corusel-btn')

  const elOurInfo = document.querySelector(".our_corusel-info")
 
