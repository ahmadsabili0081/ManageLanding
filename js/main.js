var swiper = new Swiper(".mySwiper", {
    spaceBetween: 50,
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    breakpoints: {
        320: {
          slidesPerView: 1,
        },
        700: {
          slidesPerView: 2
        },
        1200: {
            slidesPerView: 3
        }
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      }
  });

//   scroll top
window.addEventListener('scroll', () => {
    const btn = document.getElementById('btn');
    const header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 0);
    if(window.scrollY > 1650){
        btn.classList.add('showw');
    }else{
        btn.classList.remove('showw');
    }
});
const hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', function(){
    const nav = document.querySelector('nav');
    nav.classList.toggle('showNav');
    hamburger.classList.toggle('rotate');
});

function btnClick(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}