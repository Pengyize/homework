var siteWelcome = document.getElementById('siteWelcome');
var topNavBar = document.getElementById('topNavBar');

siteWelcome.classList.remove('active');


window.onscroll = function (xxx) {
    if(window.scrollY > 0){
        topNavBar.classList.add('sticky');
    }else{
        topNavBar.classList.remove('sticky');
    }
};

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
for(let i=0;i<aTags.length;i++) {
    aTags[i].onclick = function (x) {
        x.preventDefault();
        let a = x.currentTarget;
        let href = a.getAttribute('href');
        let element = document.querySelector(href);        //'#siteAbout'
        let top = element.offsetTop;

        let n = 25; //动多少次
        let duration = 500 / n; //每次持续的时间
        let currentTop = window.scrollY;  //当前位置
        let targetTop = top-120;    //目标位置
        let distance = (targetTop - currentTop) / n;    //每次动的距离
        console.log(currentTop);


        console.log(distance);
        let i = 0;
        let moveToAnchor = setInterval(() => {
            if(i === 25){
                window.clearInterval(moveToAnchor);
                return;
            }
            i++;
            window.scrollTo(0,currentTop + distance * i); //两个参数分别是x和y，浏览器横坐标的值，纵坐标的值
        },duration);

    }
}