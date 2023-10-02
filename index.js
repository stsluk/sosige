let activeIndex = 0;
let timer = setTimeout(() => plusSlides(1), 5000);

const $slideList = document.querySelector('.slideList');
const slide = $slideList.children;

//화살표 눌렀을 때
const plusSlides = (n) => {
    clearTimeout(timer);
    changeActive(n);
}

//이미지 변경하는 함수
const changeActive = (n) => {
    slide[activeIndex].classList.remove('active');
    activeIndex += n
    activeIndex %= slide.length;
    if (activeIndex < 0) {
        activeIndex += slide.length;
    }
    slide[activeIndex].classList.add('active');
    timer = setTimeout(() => plusSlides(1), 5000);
}