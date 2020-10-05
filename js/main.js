// Прокрутка ссылок + Бургер-меню

$('[href^="#anchor"]').on('click', function(event){
    event.preventDefault();

    const $link = $(this);
    const selector = $link.attr('href');

    const $target = $(selector);
    const distance = $target.offset().top;

    if ($(".nav-toggle-input").prop('checked')) {$(".nav-toggle-input").prop('checked', false);}
    $('html, body').animate({scrollTop: distance}, 800)
});


// Стики-меню sticky

$(window).scroll(function() {
    if ($(window).scrollTop() >= $(".block1").height()) {
        
        $(document).ready(function(){
            $(".header").sticky({
                topSpacing:0,
                zIndex: 100
            });
        });
    } else {
        $(".header").unstick()
    }
});


// scroll-меню (slick-slider)

const $slider = $('.tesimonails-grid').slick({
    arrows: false,
    dots: true,                // добавлено
    // appendDots: $(".tesimonails-checkpoint-grid"),
    slidesToShow: 3,
    slidesToScroll: 2,
    // centerMode: true,
    

    responsive: [{
    //     breakpoint: 768,
    //     settings: {
    //         slidesToShow: 2,
    //   }
    // },{
        breakpoint: 641,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 2
      }
    }]
});


// $('.tesimonails-checkpoint-item-click').on("click", function() {
//     const $link = $(this);
//     const selector = $link.attr('data-count');

//     $slider.slick("slickGoTo", `${selector}`);
// });

const $TGbutton = $('.tesimonails-grid button');

$TGbutton.on("click", function(event) {
    $TGbutton.css("background-color", "transparent");
    const $target = $(this);
    $target.css("background-color", "#2095bc");
});


// toShow, toScroll 4

const $sliderFeatures = $('.features-grid').slick({
    arrows: false,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 4,

    responsive: [{
        breakpoint: 981,
        settings: {
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 1
      }
    },{
        breakpoint: 481,
        settings: {
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1
      }
    }]
});

const $FGbutton = $('.features-grid button');

$FGbutton.on("click", function(event) {
    $FGbutton.css("background-color", "transparent");
    const $target = $(this);
    $target.css("background-color", "#2095bc");
});


// fancybox, нажатие на кнопку
        
$('[data-text="try"]').fancybox({
    "padding": 40,
    "width": 400,
    "height": 140,
    "overlayOpacity": 0.9,
    "overlayColor": '#f7f8fa',
    showCloseButton: true,

    // чтоб модалка не закрівалась пока пустой input

    // beforeClose : function() {
    //     if ( $('.modal-window .mail-pole').val() == '' ) {
    //         return false;
    //     }
    // }
})
