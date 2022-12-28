const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click",function () {
  searchInputEl.focus();
})


searchInputEl.addEventListener('focus', function (){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색');
});

searchInputEl.addEventListener('blur', function (){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder','');
});



// 스크롤 하면 배지 숨기는 기능 추가
const badgeEl = document.querySelector('header .badges');
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
  } else {
  //배지 보이기
  gsap.to(badgeEl, .6, {
    opacity: 1,
    dispaly: 'block'
  });
  }
  }, 300));


// section 스타벅스 그림 순차적으로 나타내기

const fadeEls = document.querySelectorAll('.visual .fade-in');
console.log(fadeEls)
fadeEls.forEach(function(fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .6, //0.7 1.4 2.1 2.7 초후에 나오게 됨.
    opacity: 1

  });

});








