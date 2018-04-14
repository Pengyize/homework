let $buttons = $('#buttonWrapper>li');
let $slides = $('#slides');
let $images = $slides.children('img');
let $next = $('#next');
let $previous = $('#previous');

makeFakeSlide();

$slides.css({transform:'translateX(-920px)'});

playSlide();

let current = 0;
$next.on('click',function () {
    goToSlide(current+1);
});
$previous.on('click',function () {
    goToSlide(current-1);
});























function makeFakeSlide() {
    let $firstCopy = $images.eq(0).clone(true);
    let $lastCopy = $images.eq($images.length-1).clone(true);

    $slides.append($firstCopy);
    $slides.prepend($lastCopy);
}



function playSlide() {

    $('#buttonWrapper').on('click', 'li', function (e) {
        let $button = $(e.currentTarget);
        $button.addClass('active').siblings().removeClass('active');
        let index = $button.index();
        goToSlide(index);

    });
}



function goToSlide(index) {
    if(index>$buttons.length-1){
        index=0;
    }else if(index<0){
        index = $buttons.length-1
    }

    if(index === 0 && current === $buttons.length-1){
        $slides.css({transform:`translateX(${-($buttons.length+1)*920}px)`})
            .one('transitionend',function () {
                $slides.hide().offset();
                $slides.css({transform: `translateX(${-(index+1)*920}px)`})
                    .show();
            });
        current = index;
    }else if(current === 0 && index === $buttons.length-1){
        $slides.css({transform:`translateX(0px)`})
            .one('transitionend',function () {
                $slides.hide().offset();
                $slides.css({transform: `translateX(${-(index+1)*920}px)`})
                    .show();
            });
        current = index;
    }else{
        $slides.css({transform:`translateX(${-(index+1)*920}px)`});
        current = index;
    }
}