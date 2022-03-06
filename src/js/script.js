// slick slider
$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1000,
        adaptiveHeight: false,
        prevArrow: '<button type="button" class="prev"><img src="img/slide/left.svg"></button>',
        nextArrow: '<button type="button" class="next"><img src="img/slide/right.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                dots: false,
                arrows: false
                }
            }
        ]
    });
});
// tiny slider
// const slider = tns({
//     container: '.carousel__inner',
//     items: 1,
//     // slideBy: 'page',
//     autoplay: false,
//     controls: false,
//     nav: false,
//     responsive: {
//         320: {
//             gutter: 10,
//             touch: true,
//             mouseDrag: true
//         },
//         900: {
//             touch: true,
//             gutter: 20,
//             mouseDrag: true
//         }
//     }
//   });
// slick slider - arrow connection
// document.querySelector('.prev').addEventListener('click', function () {
//     slider.goTo('prev');
// });
// document.querySelector('.next').addEventListener('click', function () {
//     slider.goTo('next');
// });