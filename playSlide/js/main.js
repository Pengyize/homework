let n;
Init();

setInterval(() => {
    makeLeave(getImage(n))
        .one('transitionend',(e) => {
            makeEnter($(e.currentTarget));
        });
    makeCurrent(getImage(n+1));
    n++;
},2000);
























function x(n) {
    if(n>3){
        n = n%3;
        if(n===0){
            n=3;
        }
    }

    return n;
}

function Init() {
    n=1;
    $(`.images > img:nth-child(${n})`).addClass('current')
        .siblings().addClass('enter');

}

function makeLeave($node) {
    return $node.removeClass('current enter').addClass('leave');

}
function makeEnter($node) {
    return $node.removeClass('leave current').addClass('enter');
}
function makeCurrent($node) {
    return $node.removeClass('enter leave').addClass('current');
}

function getImage(n) {
    return $(`.images > img:nth-child(${x(n)})`);
}