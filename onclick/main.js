$(clickMe).on('click',function () {
    if($(popover).is(':hidden')){
        $(popover).show();
    }else {
        $(popover).hide();
    }
    $(document).one('click',function () {
        $(popover).hide();
    });

});



$(wrapper).on('click',function(e){
    e.stopPropagation();  //阻止冒泡，这样点击popover内部就不会执行document.onclick，但这个事件还是会存放在那里
});





let n=0;
$('div').on('click',function (e) {
    setTimeout(function () {
        $(e.currentTarget).addClass('active');
    },n*1000);
    n++;
});
