//版本一





//版本二
$(clickMe).on('click',function () {
    $(popover).show();
    console.log('show');
    setTimeout(function(){
        console.log('准备添加one');
        $(document).one('click',function () {
            console.log('这里不会执行');
            console.log('hide');
            $(popover).hide();
        });
    },0 )    //添加setTimeout后，document.onclick不会马上执行，当下一次点击document.onclick的时候才会执行
});

$(document).on('click',function () {
    console.log('click事件传到了document')
});