setTimeout(function () {
    $('.images > img:nth-child(1)').css({
        transform:'translateX(-100%)'
    });
    $('.images > img:nth-child(2)').css({
        transform:'translateX(-100%)'
    });
    $('.images > img:nth-child(1)').on('transitionend',function (e) {
        $(e.currentTarget).css({transform:'none'}).addClass('right');
    });
},1000);
setTimeout(function () {
    $('.images > img:nth-child(2)').css({
        transform:'translateX(-200%)'
    });
    $('.images > img:nth-child(3)').css({
        transform:'translateX(-100%)'
    });
},2800);
