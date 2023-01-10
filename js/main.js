
// 스크롤 하면 배지 숨기는 기능 추가
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
console.log(badgeEl)


window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
  //배지 숨기기
  // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity:0,
      dispaly: 'none'
    });
    // 버튼보이기
    gsap.to(toTopEl, 0.2, {
      x: 0
    });
  } else {
  //배지 보이기
  gsap.to(badgeEl, .6, {
    opacity: 1,
    dispaly: 'block'
  });
  //버튼 숨기기
  gsap.to(toTopEl, 0.2, {
    x: 100
  });
  }
  }, 300));


toTopEl.addEventListener('click', function() {
  gsap.to(window, 0.7, {
    scrollTo: 0
  } );
});


// section 스타벅스 그림 순차적으로 나타내기

const fadeEls = document.querySelectorAll('.visual .fade-in');
console.log(fadeEls)
fadeEls.forEach(function(fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .6, //0.7 1.4 2.1 2.7 초후에 나오게 됨.
    opacity: 1

  });

});


// 공지사항 수직 슬라이드 기능



// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container',{
  direction: 'vertical',
  autoplay: true,
  loop: true
});


new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, //한번에 보여주는 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true //사용자의 페이지 번호 요소 제어
  },
  navigation: {
    prevEl:'.promotion .swiper-prev',
    nextEl:'.promotion .swiper-next'
  }


});

new Swiper('.awards .swiper-container', {
  autoplay:true,
  loop:true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation:{
    preEl:'.awards .swiper-prev',
    nextEl:'.awards .swiper-next'
  }
}); 




const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    //숨김처리!
    promotionEl.classList.add('hide');

  } else {
    // 보임처리!
    promotionEl.classList.remove('hide');
  }
})


//범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  //'.toFixed()'를 통해 반환된 문자 데이터를,
  //'parseFloat()'를 통해 소수점을 가지는 숫자 데이터로 반환
  return parseFloat((Math.random() * (max-min)+min).toFixed(2))
}



function floatingObject(selector, delay, size) {
  //gsap.to(요소, 시간, 옵션);
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat:-1,
    yoyo:true,
    ease: Power1.easeInOuteaseInOut,
    delay: random(0, delay)

  })

}

floatingObject('.floating1',1, 15);
floatingObject('.floating2',.5, 15);
floatingObject('.floating3',1.5, 20);


const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook: .8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

