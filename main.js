'use strict';



{
  // Headers
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });






// hero
function play() {
  setTimeout(() => {
    images[currentIndexs].classList.remove('current');
    currentIndexs++;
    if (currentIndexs > images.length - 1) {
        currentIndexs = 0;
    }
    images[currentIndexs].classList.add('current');
    play();
  }, 3600);
}

const images = document.querySelectorAll('.hero img');
let currentIndexs = 0;

play();




  // ボタンのスクリプト
  // window.addEventListener("scroll", function () {
  //   const topBtn = document.getElementById("to_top");
  //   const scroll = window.pageYOffset;
  //   if (scroll > 150) {      
  //     topBtn.style.opacity = 1;
  //   } else topBtn.style.opacity = 0; 


  //   topBtn.addEventListener('click', e => {
  //     e.preventDefault();
  
  //     window.scrollTo({
  //       top: 0,
  //       behavior: 'smooth',
  //     });
  //   });
  // });





  // カルーセル
//   const swiper = new Swiper('.swiper', {
//     pagination: {
//       el: ".swiper-pagination",
//     },

//     loop:true,
//     dots: true,
//     // setWrapperSize: true,


//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     }
    
  
  
// });







 // Intersection Observer API

  function callback(entries, obs) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    }

    entry.target.classList.add('appear');
    obs.unobserve(entry.target);
  });
}

const observer = new IntersectionObserver(callback, {
  threshold: 0.2,
});

document.querySelectorAll('.animate').forEach(el => {
  observer.observe(el);
});

}

