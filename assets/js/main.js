const slides = document.querySelectorAll('[data-js="anuncio__item"]');
const proxBotao = document.querySelector('[data-js="carousel__button--next"]');
const voltaBotao = document.querySelector('[data-js="carousel__button--prev"]');

let currentSlideIndex = 0;

proxBotao.addEventListener('click', () => {
    if(currentSlideIndex === slides.length - 1) {
        currentSlideIndex = 0;
    } else {
        currentSlideIndex++;
    }

    slides.forEach(slide => {
        slide.classList.remove('anuncio__item--visible');
    })

    slides[currentSlideIndex].classList.add('anuncio__item--visible');
})

voltaBotao.addEventListener('click', () => {
    if(currentSlideIndex === 0){
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex--
    }
    

    slides.forEach(slide => {
        slide.classList.remove('anuncio__item--visible')
    })

    slides[currentSlideIndex].classList.add('anuncio__item--visible')
})