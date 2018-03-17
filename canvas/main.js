var canvas = document.getElementById('canvas');

var pen1 = document.getElementById('pen1');
var pen2 = document.getElementById('pen2');
var clear =document.getElementById('clear');
var save = document.getElementById('save');

var black = document.getElementById('black');
var grey = document.getElementById('grey');
var red = document.getElementById('red');
var green = document.getElementById('green');

var lineWidth = 5;
var r=2;

var context = canvas.getContext('2d');


autoSetCanvasSize(canvas);

listenToUser(canvas);









//下面是工具函数
function drawLine(x1,y1,x2,y2) {
    context.beginPath();
    context.moveTo(x1,y1);
    context.lineWidth = lineWidth;
    context.lineTo(x2,y2);
    context.stroke();
    context.closePath();
}

function drawCircle(x,y,r) {
    context.beginPath();
    context.arc(x,y,r,0,Math.PI*2);
    context.fill();
}

function autoSetCanvasSize(canvas) {
    setCanvasSize();
    window.onresize = function () {
        setCanvasSize()
    };

    function setCanvasSize() {
        var pageWidth = document.documentElement.clientWidth;
        var pageHeight = document.documentElement.clientHeight;
        canvas.width = pageWidth;
        canvas.height = pageHeight;
    }
}


function listenToUser(canvas) {
    context.fillStyle = '#fff';                             //使画的背景颜色变成白色
    context.fillRect(0,0,canvas.width,canvas.height);       //给画的背景填充fillStyle里的颜色

    context.fillStyle = '#000';     //将画笔中的circle变成黑色
    black.onclick = function () {
        context.strokeStyle = 'black';
        context.fillStyle = 'black';
        black.className = 'black active';
        grey.className = 'grey';
        red.className = 'red';
        green.className = 'green';
    };
    grey.onclick = function () {
        context.strokeStyle = 'grey';
        context.fillStyle = 'grey';
        black.className = 'black';
        grey.className = 'grey active';
        red.className = 'red';
        green.className = 'green';
    };
    red.onclick = function () {
        context.strokeStyle = 'red';
        context.fillStyle = 'red';
        black.className = 'black';
        grey.className = 'grey';
        red.className = 'red active';
        green.className = 'green';
    };
    green.onclick = function () {
        context.strokeStyle = 'green';
        context.fillStyle = 'green';
        black.className = 'black';
        grey.className = 'grey';
        red.className = 'red';
        green.className = 'green active';
    };


    var eraserEnabled = false;
    pen1.onclick = function () {
        eraserEnabled = false;
        lineWidth = 5;
        r=2;
        pen1.classList.add('active');
        pen2.classList.remove('active');
        eraser.classList.remove('active');
    };
    pen2.onclick = function () {
        eraserEnabled = false;
        lineWidth = 10;
        r=5;
        pen2.classList.add('active');
        pen1.classList.remove('active');
        eraser.classList.remove('active');
    };
    eraser.onclick = function () {
        eraserEnabled = true;
        eraser.classList.add('active');
        pen1.classList.remove('active');
        pen2.classList.remove('active');
    };
    clear.onclick = function () {
        context.clearRect(0,0,canvas.width,canvas.height);
    };

    save.onclick = function () {
        var url = canvas.toDataURL('image/png');
        var a = document.createElement('a');
        document.body.appendChild(a);
        a.href = url;
        a.download = '画';
        a.target = '_blank';
        a.click();
    };


    var using = false;

    var lastPoint = {
        x:undefined,
        y:undefined
    };

    if(document.body.ontouchstart !== undefined){
        //触屏设备
        canvas.ontouchstart = function (ev) {
            var x = ev.touches[0].clientX;
            var y = ev.touches[0].clientY;
            using = true;

            if(eraserEnabled){
                context.clearRect(x-5,y-5,20,20);
            }else{
                lastPoint = {x:x,y:y};
                drawCircle(x,y,r);
            }
        };

        canvas.ontouchmove = function (ev) {
            var x = ev.touches[0].clientX;
            var y = ev.touches[0].clientY;

            if(using){
                if(eraserEnabled){
                    context.clearRect(x-5,y-5,20,20);
                }else {
                    var newPoint = {x:x,y:y};
                    drawCircle(x,y,r);
                    drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y);
                    lastPoint = newPoint;
                }
            }
        };

        canvas.ontouchend = function () {
            using = false;
        };


    }else{
        //非触屏设备
        canvas.onmousedown = function (ev) {
            var x = ev.clientX;
            var y = ev.clientY;
            using = true;

            if(eraserEnabled){
                context.clearRect(x-5,y-5,20,20);
            }else{
                lastPoint = {x:x,y:y};
                drawCircle(x,y,r);
            }

        };

        canvas.onmousemove = function (ev) {
            var x = ev.clientX;
            var y = ev.clientY;

            if(using){
                if(eraserEnabled){
                    context.clearRect(x-5,y-5,20,20);
                }else {
                    var newPoint = {x:x,y:y};
                    drawCircle(x,y,r);
                    drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y);
                    lastPoint = newPoint;
                }
            }
        };

        canvas.onmouseup = function () {
            using = false;
        };

        canvas.onmouseout = function () {
            using = false;
        };
    }


}

