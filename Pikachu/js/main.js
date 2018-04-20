!function () {
    let duration =20;

  function writeCode(prefix, code, fn) {
      let container = document.querySelector('#code');
      let styleTag = document.querySelector('#styleTag');
      let wrapper = document.querySelector('#code-wrapper');
      let n=0;
      setTimeout(function run(){
          n += 1;
          container.innerHTML =Prism.highlight(prefix + code.substring(0,n), Prism.languages.css) ;
          styleTag.innerHTML = prefix + code.substring(0,n);
          wrapper.scrollTop = wrapper.scrollHeight;
          if(n<code.length) {
              setTimeout(run,duration)
          }else{
              fn && fn();
          }
      },duration)
  }

let code = `
/*
 * 首先画皮卡丘的皮肤
 */
 
.preview{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fee433;
}


.wrapper{
    width: 100%;
    height: 165px;
    position: relative;
}

/*
 * 接着画皮卡丘的鼻子
 */

.nose{
    position: absolute;
    left: 50%;
    top: 28px;
    width: 0;
    height: 0;
    border: 12px solid black;
    border-color: black transparent transparent;
    border-radius: 50%;
    margin-left: -12px;
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
    width: 68px;
    height: 68px;
    border-radius: 50%;
    background: #fc0d1c;
    border: 2px solid black;
    position: absolute;
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
.lowerLip-wrapper{
    bottom: -18px;
    position: absolute;
    left: 50%;
    margin-left: -160px;
    width: 300px;
    height: 125px;
    overflow: hidden;
}
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

`;

  writeCode('', code);
  $('.actions').on('click','button',function (e) {
      let $button = $(e.currentTarget);
      let $speed = $button.attr('data-speed');
      $button.addClass('btn-primary');
      $button.siblings().removeClass('btn-primary');
      switch ($speed){
          case 'normal':
              duration = 20;
              break
          case 'fast':
              duration = 0;
              break
      }
  })
}();
