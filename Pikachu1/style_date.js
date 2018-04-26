!function () {
    window.code = `
/*
 *  面试官，你好！
 *  
 *  我叫 「 彭奕泽 」，在大学期间自学了前端开发。
 * 
 *  很高兴您能够腾出宝贵的时间来看我的作品！
 *
 *  今天我们用 CSS 来画一只皮卡丘!
 */

 
body{
    background: #fee433;
    font-size: 16px;
}


/* 首先准备一张纸 */
#container{
    opacity: 0.4;
}
.black{
    background: black;
}

/*
 * 接着画皮卡丘的鼻子
 */

.nose{
    position: absolute;
    width: 0;
    height: 0;
    top: -70px;
    left: calc(50% - 11px);
    border: 12px solid black;
    border-color: black transparent transparent;
    border-radius: 50%;
    margin: 100px auto 0;
}

/*
 * 接着画皮卡丘的眼睛
 */
.eye{
    width: 49px;
    height: 49px;
    background: #3a3a3a;
    border-radius: 50%;
    border: 2px solid black;
    position: absolute;
}
/*
 * 左眼
 */
.eye.left{
    right: 50%;
    margin-right: 90px;
}
/*
 * 右眼
 */
.eye.right{
    left: 50%;
    margin-left: 90px;
}

/*
 * 解锁炯炯有神的眼睛
 */
.eye::before{
    content: "";
    display: block;
    background: white;
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    left: 6px;
    border: 1px solid black;
}

/* 
 * 加上酒窝
 */
.face{
    position: absolute;
    width: 68px;
    height: 68px;
    border-radius: 50%;
    background: #fc0d1c;
    border: 2px solid black;
    top: 85px;
}
/* 
 * 把酒窝放到正确的位置
 */
.face.left{
     right: 50%;
     margin-right: 116px;
 }
.face.right{
    left: 50%;
    margin-left: 116px;
}

/* 
 * 画上嘴唇
 */
.upperLip{
    background: #fee433;
    width: 80px;
    height: 25px;
    border: 3px solid black;
    border-top: none;
    position: absolute;
    top: 49px;
}
/* 
 * 左嘴唇
 */
.upperLip.left{
    border-bottom-left-radius: 40px 26px;
    border-right: none;
    border-top: none;
    transform: rotate(-18deg);
    right: 50%;
}
/* 
 * 右嘴唇
 */
.upperLip.right{
    border-bottom-right-radius: 40px 26px;
    border-left: none;
    transform: rotate(18deg);
    left: 50%;
}
/* 
 * 画上舌头
 */

.lowerLip{
    width: 320px;
    height: 3500px;
    border-radius: 200px/2200px;
    background: #990513;
    border: 2px solid black;
    bottom: 0;
    position: absolute;
    overflow: hidden;
}
.lowerLip::after{
    content: '';
    position: absolute;
    bottom: -60px;
    width: 160px;
    height: 160px;
    background: #fc4a62;
    left: 50%;
    margin-left: -80px;
    border-radius: 80px;
}

/* 
 * 皮卡丘完成了～
 */


/* 
 *  最后，让我们的皮卡丘动起来！
 */

@keyframes blink {
    0%, 2%, 60%, 62%, 100% {
        -webkit-transform: scaleX(1) scaleY(1);
        transform: scaleX(1) scaleY(1);
    }
    1%, 61% {
        -webkit-transform: scaleX(1.5) scaleY(0.1);
        transform: scaleX(1.5) scaleY(0.1);
    }
}

/*
 *  眨眨眼睛！
 */

.upper-face > *{
    animation: blink forwards infinite 8s ease-in-out;
}
 `;
}();