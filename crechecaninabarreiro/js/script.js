// Burger menu

const burger = document.querySelector('.burger');

const navLinks = document.querySelector('.mobile-nav-links');

const links = document.querySelectorAll('.mobile-nav-links li');

const body = document.querySelector('body');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    body.classList.toggle('no-scroll');
    burger.classList.toggle('active');
}) 


$(document).ready(function(){

  $('.collapsible').on('click', function(){
    $(this).toggleClass('active');
    $(this).next().slideToggle();
  })


  $('.carousel').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    variableWidth: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          dots: false,
          }
        }
    ]
  });
})

$(window).on('scroll', function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 10) {
     $('.hero-text').fadeOut();
  } else {
      $('.hero-text').fadeIn();
  }
});
