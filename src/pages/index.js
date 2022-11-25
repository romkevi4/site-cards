import { slides } from '../utils/constants.js';
// import './index.css';

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses();

        slide.classList.add('page__slide_active');
    })
}

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('page__slide_active');
    })
}