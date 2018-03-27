var siteWelcome = document.getElementById('siteWelcome');
var topNavBar = document.getElementById('topNavBar');

siteWelcome.classList.remove('active');

findClosest();
window.onscroll = function (xxx) {
    if(window.scrollY > 0){
        topNavBar.classList.add('sticky');
    }else{
        topNavBar.classList.remove('sticky');
    }
    findClosest();


};
function findClosest() {
    let specialTags = document.querySelectorAll('[data-x]');
    let minIndex = 0;
    for(let i=0;i<specialTags.length;i++){

        if(Math.abs(window.scrollY - specialTags[i].offsetTop + 285) < Math.abs(285 + window.scrollY - specialTags[minIndex].offsetTop)){
            minIndex = i;
        }
    }

    specialTags[minIndex].classList.remove('offset');
    for(let i=0;i<specialTags.length;i++){
        if(i<minIndex){
            specialTags[i].classList.remove('offset');
        }
    }

    let id = specialTags[minIndex].id;
    let a = document.querySelector('a[href="#'+id+'"]');
    let li = a.parentNode;
    let brothersAndMe = li.parentNode.children;     //brotherAndMe是个数组
    for(let i=0;i<brothersAndMe.length;i++){
        brothersAndMe[i].classList.remove('highlight');
    }
    li.classList.add('highlight');
}

let liTags = document.querySelectorAll('nav.menu > ul > li');
for(let i=0;i<  liTags.length;i++){                 //for循环，这样就能同时监听数组里的所有值
    liTags[i].onmouseenter = function (x) {
        // console.log(x.target);                   //x.target是我们操作的那个元素，就是我们点击的元素，若a里包含了个span，那操作的就是span
        // x.currentTarget.classList.remove('leave');
        x.currentTarget.classList.add('active');    //x.currentTarget是监听的元素，就是li元素
    };
    liTags[i].onmouseleave = function (x) {
        x.currentTarget.classList.remove('active');
        // x.currentTarget.classList.add('leave');
    };
}

let aTags = document.querySelectorAll('nav.menu > ul > li > a');
function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate);

for(let i=0;i<aTags.length;i++) {
    aTags[i].onclick = function (x) {
        x.preventDefault();
        let a = x.currentTarget;
        let href = a.getAttribute('href');
        let element = document.querySelector(href);        //'#siteAbout'
        let top = element.offsetTop;


        let currentTop = window.scrollY;  //当前位置
        let targetTop = top-120;    //目标位置


        var coords = { y: currentTop};
        var tween = new TWEEN.Tween(coords)
            .to({ y: targetTop}, 600)
            .easing(TWEEN.Easing.Quadratic.Out)
            .onUpdate(function() {
                window.scrollTo(0,coords.y);
            })
            .start();

    }
}