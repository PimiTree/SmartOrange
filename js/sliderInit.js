import { register } from 'swiper/element/bundle';
export default function sliderInit() {
    register();
    const promoSlider = document.querySelector('.sct-promo-slider');

    const promoSliderParams = {
        slidesPerView: 1,
        navigation: {
            nextEl: '.next-slide',
            prevEl: '.prev-slide'
        },
        pagination: {
            el: '.sct-promo-slider-count',
            type: 'fraction',
            renderFraction: function (currentClass, totalClass) {
                return '<div class="' + currentClass + '"></div>' +
                    '<div class="count-divider"></div>' +
                    '<div class="' + totalClass + '"></div>';
            },
            formatFractionCurrent: function (number) {
                if (number < 9) {
                    return '0' + number;
                } else {
                    return number;
                }
            },
            formatFractionTotal: function (number) {
                if (number < 9) {
                    return '0' + number;
                } else {
                    return number;
                }
            },
        },

    }

    Object.assign(promoSlider, promoSliderParams);
    promoSlider.initialize();

    promoSlider.addEventListener('swiperslidechange', (e) => {
        const {activeIndex, realIndex} = e.detail[0];

        changeProjectName(activeIndex)
    })
}
function changeProjectName(sliderNumber) {
    const projectNameContainer = document.querySelector('.sct-promo-projects_name');
    const projectNameMap = ['home', 'other home', 'another home'];

    projectNameContainer.classList.add('fade-out');
    setTimeout(() => {
        projectNameContainer.textContent = projectNameMap[sliderNumber];
        projectNameContainer.classList.remove('fade-out');
    }, 300)
}
