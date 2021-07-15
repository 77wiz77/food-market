$(document).ready(function() { //JQuery
    $('.menu-burger').click(function() { /*если было нажатие на меню бургер*/
        $('.menu-burger').toggleClass('open-menu'); /*добавим к блоку с меню дополнительный класс open-menu*/
        $('.header-menu').toggleClass('open-menu');/*добавление класса open-menu к тегу nav*/
        $('body').toggleClass('fixed-page');/*блокировка страницы при  открытом меню*/
    });
});

// var $page = $('html, body');
// $('a[href*="#Action"]').click(function() {
//     $page.animate({
//         scrollTop: $($.attr(this, 'href')).offset().top - 60
//     }, 400);
//     return false;
// });

// $("a.scroll-to").on("click", function(e){
//     e.preventDefault();
//     var anchor = $(this).attr('href');
//     $('html, body').stop().animate({
//         scrollTop: $(anchor).offset().top - 60
//     }, 800);
// });


/*якорные ссылки на чистом JS*/
// const anchors = document.querySelectorAll('a.scroll-to')

// for (let anchor of anchors) {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault()
    
//     const blockID = anchor.getAttribute('href')
    
//     document.querySelector(blockID).scrollIntoView({
//       behavior: 'smooth',
//       block: 'start'
//     })
//   })
// }

/*открытие и закрытие карточки*/